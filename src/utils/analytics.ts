import Plausible from 'plausible-tracker';
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';
import * as Sentry from '@sentry/react';

// Initialize analytics only in browser environment
const isClient = typeof window !== 'undefined';

// Initialize Plausible Analytics with environment variables
const plausible = isClient ? Plausible({
  domain: import.meta.env.VITE_PLAUSIBLE_DOMAIN || 'localhost',
  trackLocalhost: true,
  apiHost: import.meta.env.VITE_PLAUSIBLE_API_HOST || 'https://plausible.io'
}) : null;

// Enable automatic tracking if in browser
if (plausible) {
  plausible.enableAutoPageviews();
  plausible.enableAutoOutboundTracking();
}

// Initialize Sentry
if (isClient) {
  try {
    // Only initialize if we're in production and have a valid DSN
    if (import.meta.env.PROD && import.meta.env.VITE_SENTRY_DSN) {
      Sentry.init({
        dsn: import.meta.env.VITE_SENTRY_DSN,
        integrations: [
          new Sentry.BrowserTracing({
            tracingOrigins: ['localhost', 'ludopathyland.com']
          }),
          new Sentry.Replay()
        ],
        // Performance Monitoring
        tracesSampleRate: import.meta.env.PROD ? 0.2 : 1.0,
        // Session Replay
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
        // Environment
        environment: import.meta.env.MODE,
        // Enable debug in development
        debug: import.meta.env.DEV,
        // Ignore common errors
        ignoreErrors: [
          'ResizeObserver loop limit exceeded',
          'Network request failed',
          /^Script error\.?$/,
          /^Javascript error: Script error\.? on line 0$/
        ],
        beforeSend(event) {
          // Don't send events in development
          if (import.meta.env.DEV) {
            return null;
          }
          return event;
        }
      });
    }
  } catch (error) {
    console.error('Failed to initialize Sentry:', error);
  }
}

// Track web vitals only in browser
const reportWebVital = isClient ? ({ name, value, id }: { name: string; value: number; id: string }) => {
  plausible?.trackEvent('Web Vitals', {
    props: {
      metric: name,
      value: Math.round(value),
      id
    }
  });
} : null;

// Initialize web vitals tracking if in browser
if (reportWebVital) {
  onCLS(reportWebVital);
  onFID(reportWebVital);
  onLCP(reportWebVital);
  onFCP(reportWebVital);
  onTTFB(reportWebVital);
}

// Session management
let sessionTimeout: number | null = null;
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

const resetSessionTimeout = () => {
  if (!isClient) return;
  
  if (sessionTimeout) {
    window.clearTimeout(sessionTimeout);
  }
  sessionTimeout = window.setTimeout(() => {
    const duration = Date.now() - parseInt(sessionStorage.getItem('sessionStart') || '0', 10);
    analytics.session.end(duration);
    analytics.session.start(); // Start a new session
  }, SESSION_TIMEOUT);
};

// Add session timeout reset on user activity
const setupSessionTimeoutReset = () => {
  if (!isClient) return;
  
  ['mousedown', 'keydown', 'scroll', 'touchstart'].forEach(event => {
    window.addEventListener(event, resetSessionTimeout, { passive: true });
  });
};

// Custom event tracking
const trackCustomEvent = (
  eventName: string,
  properties?: Record<string, string | number | boolean>
) => {
  if (!isClient) return;
  
  resetSessionTimeout();
  
  // Track in Plausible
  plausible?.trackEvent(eventName, { props: properties });

  // Track in Sentry if available
  if (import.meta.env.VITE_SENTRY_DSN) {
    try {
      Sentry.addBreadcrumb({
        category: 'user-action',
        message: eventName,
        data: properties,
        level: 'info'
      });
    } catch (error) {
      console.error('Failed to track event in Sentry:', error);
    }
  }
};

// Error tracking
const trackError = (error: Error, errorInfo?: Record<string, any>) => {
  if (!isClient) return;
  
  if (import.meta.env.VITE_SENTRY_DSN) {
    try {
      Sentry.captureException(error, {
        extra: errorInfo
      });
    } catch (sentryError) {
      console.error('Failed to track error in Sentry:', sentryError);
    }
  }

  trackCustomEvent('Error', {
    name: error.name,
    message: error.message,
    ...errorInfo
  });
};

// Performance monitoring
const trackPerformance = {
  apiCall: (endpoint: string, duration: number, success: boolean) => {
    trackCustomEvent('API Performance', { endpoint, duration, success });
  },

  componentRender: (componentName: string, duration: number) => {
    trackCustomEvent('Component Render', { componentName, duration });
  },

  resourceLoad: (resourceType: string, duration: number) => {
    trackCustomEvent('Resource Load', { resourceType, duration });
  }
};

// User behavior tracking
const trackUserBehavior = {
  buttonClick: (buttonName: string, location: string) => {
    trackCustomEvent('Button Click', { buttonName, location });
  },

  linkClick: (href: string, text: string) => {
    trackCustomEvent('Link Click', { href, text });
  },

  formSubmission: (formName: string, success: boolean) => {
    trackCustomEvent('Form Submission', { formName, success });
  },

  search: (query: string, resultsCount: number) => {
    trackCustomEvent('Search', { query, resultsCount });
  },

  filter: (filterName: string, value: string) => {
    trackCustomEvent('Filter Usage', { filterName, value });
  },

  casinoView: (casinoName: string) => {
    trackCustomEvent('Casino View', { casinoName });
  },

  bonusClick: (casinoName: string, bonusAmount: string) => {
    trackCustomEvent('Bonus Click', { casinoName, bonusAmount });
  },

  pageScroll: (percentage: number) => {
    trackCustomEvent('Page Scroll', { percentage });
  },

  timeOnPage: (seconds: number, path: string) => {
    trackCustomEvent('Time on Page', { seconds, path });
  }
};

// Session tracking
const trackSession = {
  start: () => {
    if (!isClient) return;
    
    try {
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const resolution = `${screenWidth}x${screenHeight}`;

      const sessionData = {
        timestamp: Date.now(),
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        screenResolution: resolution,
        language: navigator.language
      };

      sessionStorage.setItem('sessionStart', sessionData.timestamp.toString());
      sessionStorage.setItem('sessionData', JSON.stringify(sessionData));
      
      trackCustomEvent('Session Start', sessionData);
      setupSessionTimeoutReset();
      resetSessionTimeout();
    } catch (error) {
      console.error('Failed to start session tracking:', error);
    }
  },

  end: (duration: number) => {
    if (!isClient) return;
    
    try {
      const sessionData = JSON.parse(sessionStorage.getItem('sessionData') || '{}');
      const pagesViewed = parseInt(sessionStorage.getItem('pagesViewed') || '0', 10);
      
      trackCustomEvent('Session End', {
        duration,
        pagesViewed,
        ...sessionData
      });

      // Clear session storage
      sessionStorage.removeItem('sessionStart');
      sessionStorage.removeItem('sessionData');
      sessionStorage.removeItem('pagesViewed');
    } catch (error) {
      console.error('Failed to end session tracking:', error);
    }
  }
};

// Create analytics object
const analytics = {
  track: trackCustomEvent,
  error: trackError,
  performance: trackPerformance,
  session: trackSession,
  behavior: trackUserBehavior
};

// Export individual functions and analytics object
export {
  trackCustomEvent,
  trackError,
  trackPerformance,
  trackSession,
  trackUserBehavior,
  analytics
};

// Default export
export default analytics;