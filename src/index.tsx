import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";

import { ErrorBoundary } from "react-error-boundary";

import { FullPageFallback } from "components";
import { QueryClientProvider } from "context";

const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<FullPageFallback />}>
      <ErrorBoundary
        fallback={<FullPageFallback message="Something went wrong" />}
      >
        <QueryClientProvider>
          <App />
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  </React.StrictMode>
);
