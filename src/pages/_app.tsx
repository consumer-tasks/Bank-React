import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import 'tailwindcss/tailwind.css';
import '../../mocks'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
