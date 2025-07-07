import { Component, type ReactNode, type ErrorInfo } from 'react';
import { MainLayout } from '@/components/templates';
import { Button } from '@/components/atoms';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <MainLayout>
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center max-w-md">
              <svg
                className="mx-auto h-16 w-16 text-red-500 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h1 className="text-2xl font-bold text-white mb-2">
                ¡Ups! Algo salió mal
              </h1>
              <p className="text-gray-400 mb-6">
                {this.state.error?.message || 'Ha ocurrido un error inesperado'}
              </p>
              <Button variant="primary" onClick={this.handleReset}>
                Volver al inicio
              </Button>
            </div>
          </div>
        </MainLayout>
      );
    }

    return this.props.children;
  }
}
