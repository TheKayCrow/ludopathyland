import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieConsent } from './CookieConsent';
import { PrivacyPolicy } from './PrivacyPolicy';
import { ScrollToTop } from './ScrollToTop';
import { LoadingBar } from './LoadingBar';
import { SkipLinks } from './SkipLinks';
import { AnimatePresence, motion } from 'framer-motion';
import { useSession } from '../hooks/useSession';
import { ErrorBoundary } from './ErrorBoundary';
import { SEOTags } from './SEOTags';

export function Layout() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  
  // Initialize session tracking
  useSession();

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
          <SkipLinks />
          <LoadingBar />
          <SEOTags />
          
          <header>
            <Navbar />
          </header>

          <main id="main" tabIndex={-1} className="flex-grow pt-[73px]">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer />
          <ScrollToTop />
          <CookieConsent onPrivacyClick={() => setShowPrivacyPolicy(true)} />
          {showPrivacyPolicy && (
            <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
          )}
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}