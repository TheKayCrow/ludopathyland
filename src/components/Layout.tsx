import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieConsent } from './CookieConsent';
import { PrivacyPolicy } from './PrivacyPolicy';
import { ScrollToTop } from './ScrollToTop';
import { LoadingBar } from './LoadingBar';

export function Layout() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
        <LoadingBar />
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
        <CookieConsent onPrivacyClick={() => setShowPrivacyPolicy(true)} />
        {showPrivacyPolicy && (
          <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
        )}
      </div>
    </HelmetProvider>
  );
}