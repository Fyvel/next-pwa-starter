import '@/styles/splashscreen.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import Layout from '@/components/Layout'
import AppContextProvider from '@/context/AppContext'
import PwaInstaller from '@/components/PwaInstaller'

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	if (!process.env.NEXT_PUBLIC_MEME_API_URL)
		throw new Error('Bro... you missed an api url in the `.env` file in used')

	const clients = {
		memeApiUrl: process.env.NEXT_PUBLIC_MEME_API_URL
	}

	// Remove the splashscreen
	setTimeout(() => {
		if (typeof window !== 'undefined') {
			const splahscreen = document.getElementById('splashscreen')
			if (splahscreen) splahscreen.remove()
		}
	}, 2000)

	const PageLayout = Component.getLayout || ((page) => (<Layout>{page}</Layout>))

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,user-scalable=yes"
				/>
				<title>🚀 Next PWA 🚀</title>
			</Head>
			<AppContextProvider clients={{ ...clients }}>
				{PageLayout(<Component {...pageProps} />)}
			</AppContextProvider>
			<PwaInstaller />
		</>)
}

export default MyApp
