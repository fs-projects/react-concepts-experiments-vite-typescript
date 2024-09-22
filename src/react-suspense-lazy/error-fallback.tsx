interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Error loading photos:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try Again</button>
  </div>
);

export default ErrorFallback;
