export default function MetaTags() {
	return (
		<>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="description" content="Starter pack for a NextJS PWA" />
			<meta name="keywords" content="Keywords" />
			<link rel="manifest" href="/manifest.webmanifest" />
			<link rel="icon" href="/favicon.ico" />
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
		</>
	)
}