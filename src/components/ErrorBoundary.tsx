import { Component, ErrorInfo, ReactNode } from 'react';
import { trackError } from '../utils/analytics';
import { Button } from './Button';
import { RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    trackError(error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold mb-4">Qualcosa è andato storto</h1>
            <p className="text-gray-400 mb-6">
              Ci scusiamo per l'inconveniente. Il nostro team è stato notificato e sta lavorando per risolvere il problema.
            </p>
            <div className="space-y-4">
              <Button
                variant="primary"
                onClick={this.handleReload}
                className="w-full flex items-center justify-center gap-2"
              >
                <RefreshCw className="h-5 w-5" />
                Ricarica la pagina
              </Button>
              <a
                href="/"
                className="block text-pastel-purple hover:text-pastel-purple-light transition-colors"
              >
                Torna alla home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}