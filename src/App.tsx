import { Suspense} from 'react';
import './App.css';
import { PhotoLibrary, resetPhotos } from './react-suspense-lazy/react-suspense-lazy';
import { GlobalLoader } from './react-suspense-lazy/global-loader';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './react-suspense-lazy/error-fallback';

// const PhotoLibrary = lazy(() => import('./react-suspense-lazy/react-suspense-lazy').then((module) => ({
//   default: module.PhotoLibrary
// })))
function App() {
  return (
    <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      resetPhotos(); // Reset cache and promises on retry
    }}
  >
    <Suspense fallback={<GlobalLoader/>}>
      <PhotoLibrary/>
    </Suspense>
    </ErrorBoundary>
  );
}

export default App;
