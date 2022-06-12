import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Next PWA</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="description" content="Starter pack for a NextJS PWA" />
				<meta name="keywords" content="Keywords" />
				<link rel="manifest" href="/manifest.webmanifest" />
				<link
					href="/icons/favicon-16x16.png"
					rel="icon"
					type="image/png"
					sizes="16x16"
				/>
				<link
					href="/icons/favicon-32x32.png"
					rel="icon"
					type="image/png"
					sizes="32x32"
				/>
				<link rel="apple-touch-icon" href="/apple-icon.png"></link>
				<meta name="theme-color" content="#004740" />
			</Head>
			<Component {...pageProps} />
		</>)
}

export default MyApp
