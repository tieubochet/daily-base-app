import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  base,
  celo,
  celoAlfajores,
  mainnet,
  optimism,
  arbitrum,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query';

const config = getDefaultConfig({
  appName: 'Base Daily App',
  projectId: 'YOUR_PROJECT_ID', // Placeholder
  chains: [base, mainnet, optimism, arbitrum, celo, celoAlfajores],
  ssr: false, // Client-side only
});

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: '#FFFFFF',
            accentColorForeground: '#003AD1',
            borderRadius: 'medium',
          })}
        >
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);