import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './i18n';
import './index.css';
import './styles/layout.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

// Wait for i18n to initialize before rendering
const renderApp = () => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

// Initialize app with error boundary
try {
  renderApp();
} catch (error) {
  console.error('Failed to render app:', error);
  // Render fallback UI
  root.render(
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <p className="text-gray-400">Please try refreshing the page</p>
      </div>
    </div>
  );
}