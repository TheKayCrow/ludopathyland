import { useEffect, useRef } from 'react';
import { analytics } from '../utils/analytics';

export function useSession() {
  const sessionStartRef = useRef<number>(Date.now());
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      if (isFirstRender.current) {
        // Start session tracking only once
        analytics.session.start();
        isFirstRender.current = false;

        // Store session start time in sessionStorage
        sessionStorage.setItem('sessionStart', sessionStartRef.current.toString());
        
        // Initialize pages viewed counter
        if (!sessionStorage.getItem('pagesViewed')) {
          sessionStorage.setItem('pagesViewed', '0');
        }
      }

      // Increment pages viewed counter
      const pagesViewed = parseInt(sessionStorage.getItem('pagesViewed') || '0', 10);
      sessionStorage.setItem('pagesViewed', (pagesViewed + 1).toString());

      // Handle session end
      const handleSessionEnd = () => {
        try {
          const sessionStart = parseInt(sessionStorage.getItem('sessionStart') || '0', 10);
          const duration = Date.now() - sessionStart;
          analytics.session.end(duration);
        } catch (error) {
          console.error('Error ending session:', error);
        }
      };

      // Add event listeners for session end
      window.addEventListener('beforeunload', handleSessionEnd);
      window.addEventListener('pagehide', handleSessionEnd);

      return () => {
        window.removeEventListener('beforeunload', handleSessionEnd);
        window.removeEventListener('pagehide', handleSessionEnd);
      };
    } catch (error) {
      console.error('Error in useSession hook:', error);
    }
  }, []);

  return null;
}