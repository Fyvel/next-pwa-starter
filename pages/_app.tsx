import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import Layout from '@/components/Layout'

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
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
			{PageLayout(<Component {...pageProps} />)}
		</>)
}

export default MyApp
