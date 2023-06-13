import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<link rel='shortcut icon' href='/images/tree.png' />
				<title>Laura Persichini</title>
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
