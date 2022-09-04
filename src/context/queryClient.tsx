import React from "react";
import { QueryClient, QueryClientProvider as RQProvider } from "react-query";

interface QueryClientProps {
  children: React.ReactNode;
}

function useSingleton(initializer: () => QueryClient) {
  return React.useState(initializer)[0];
}

export const QueryClientProvider = ({ children }: QueryClientProps) => {
  const queryClient = useSingleton(() => {
    const client = new QueryClient({
      defaultOptions: {
        queries: {
          useErrorBoundary: true,
          refetchOnWindowFocus: false,
          retry(failureCount) {
            if (failureCount < 2) return true;
            else return false;
          },
        },
      },
    });

    return client;
  });

  return <RQProvider client={queryClient}>{children}</RQProvider>;
};
