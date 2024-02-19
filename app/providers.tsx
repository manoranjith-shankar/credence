"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from 'react-hot-toast';

import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  polygonMumbai,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const config = getDefaultConfig({
  appName: 'projectX',
  projectId: 'b4b96dd974332fe24cac9a91648749e7',
  chains: [mainnet, polygon, polygonMumbai],
  ssr: false,
});

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

	return (
		<WagmiProvider config={config}>
		<QueryClientProvider client={queryClient}>
		  <RainbowKitProvider
        theme={darkTheme({
          fontStack: 'system',
          accentColor: '#7b3fe4',
          accentColorForeground: 'white',
          borderRadius: 'large',
          overlayBlur: 'small',
        })}
        modalSize="compact"
        initialChain={polygonMumbai}
      >
			<NextUIProvider navigate={router.push}>
				<NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        <Toaster />
			</NextUIProvider>
		</RainbowKitProvider>
		</QueryClientProvider>
	  </WagmiProvider>
	);
}
