import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { SEOTags } from './components/SEOTags';
import { Loader } from './components/Loader';
import { ErrorBoundary } from './components/ErrorBoundary';
import { analytics } from './utils/analytics';

// Lazy load pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Comparazione = lazy(() => import('./pages/Comparazione').then(module => ({ default: module.Comparazione })));
const CasinoDetail = lazy(() => import('./pages/CasinoDetail').then(module => ({ default: module.CasinoDetail })));
const Guide = lazy(() => import('./pages/Guide').then(module => ({ default: module.Guide })));
const News = lazy(() => import('./pages/News').then(module => ({ default: module.News })));
const Strategies = lazy(() => import('./pages/Strategies').then(module => ({ default: module.Strategies })));
const Banking = lazy(() => import('./pages/Banking').then(module => ({ default: module.Banking })));
const Earnings = lazy(() => import('./pages/Earnings').then(module => ({ default: module.Earnings })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfService').then(module => ({ default: module.TermsOfServicePage })));
const ResponsibleGamingPage = lazy(() => import('./pages/ResponsibleGaming').then(module => ({ default: module.ResponsibleGamingPage })));
const Crypto = lazy(() => import('./pages/Crypto').then(module => ({ default: module.Crypto })));

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track page view
    analytics.track('Page View', {
      path: location.pathname,
      title: document.title
    });

    // Start tracking session
    const startTime = Date.now();
    
    return () => {
      // Track time spent on page when leaving
      const duration = Date.now() - startTime;
      analytics.behavior.timeOnPage(Math.round(duration / 1000), location.pathname);
    };
  }, [location.pathname]);
  
  return null;
}

// Track scroll depth
function ScrollTracker() {
  const location = useLocation();

  useEffect(() => {
    let maxScroll = 0;
    const trackScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = Math.round((scrolled / scrollHeight) * 100);
      
      if (percentage > maxScroll) {
        maxScroll = percentage;
        if (percentage % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          analytics.behavior.pageScroll(percentage);
        }
      }
    };

    window.addEventListener('scroll', trackScroll);
    return () => window.removeEventListener('scroll', trackScroll);
  }, [location.pathname]);

  return null;
}

function App() {
  useEffect(() => {
    // Start session tracking
    analytics.session.start();

    // Track session end on unmount
    return () => {
      analytics.session.end(Date.now() - performance.now());
    };
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <ScrollTracker />
          <SEOTags />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              } />
              <Route path="/comparazione" element={
                <Suspense fallback={<Loader />}>
                  <Comparazione />
                </Suspense>
              } />
              <Route path="/casino/:id" element={
                <Suspense fallback={<Loader />}>
                  <CasinoDetail />
                </Suspense>
              } />
              <Route path="/guide" element={
                <Suspense fallback={<Loader />}>
                  <Guide />
                </Suspense>
              } />
              <Route path="/news" element={
                <Suspense fallback={<Loader />}>
                  <News />
                </Suspense>
              } />
              <Route path="/strategie" element={
                <Suspense fallback={<Loader />}>
                  <Strategies />
                </Suspense>
              } />
              <Route path="/banking" element={
                <Suspense fallback={<Loader />}>
                  <Banking />
                </Suspense>
              } />
              <Route path="/guadagni" element={
                <Suspense fallback={<Loader />}>
                  <Earnings />
                </Suspense>
              } />
              <Route path="/crypto" element={
                <Suspense fallback={<Loader />}>
                  <Crypto />
                </Suspense>
              } />
              <Route path="/privacy-policy" element={
                <Suspense fallback={<Loader />}>
                  <PrivacyPolicyPage />
                </Suspense>
              } />
              <Route path="/terms-of-service" element={
                <Suspense fallback={<Loader />}>
                  <TermsOfServicePage />
                </Suspense>
              } />
              <Route path="/responsible-gaming" element={
                <Suspense fallback={<Loader />}>
                  <ResponsibleGamingPage />
                </Suspense>
              } />
            </Route>
          </Routes>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;