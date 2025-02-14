import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Comparazione } from './pages/Comparazione';
import { CasinoDetail } from './pages/CasinoDetail';
import { Guide } from './pages/Guide';
import { News } from './pages/News';
import { Strategies } from './pages/Strategies';
import { Banking } from './pages/Banking';
import { Earnings } from './pages/Earnings';
import { PrivacyPolicyPage } from './pages/PrivacyPolicy';
import { TermsOfServicePage } from './pages/TermsOfService';
import { ResponsibleGamingPage } from './pages/ResponsibleGaming';
import { Crypto } from './pages/Crypto';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/comparazione" element={<Comparazione />} />
          <Route path="/casino/:id" element={<CasinoDetail />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/news" element={<News />} />
          <Route path="/strategie" element={<Strategies />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/guadagni" element={<Earnings />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/responsible-gaming" element={<ResponsibleGamingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;