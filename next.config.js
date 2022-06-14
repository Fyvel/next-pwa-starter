/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(withPWA({
	reactStrictMode: true,
	pwa: {
		dest: 'public',
		runtimeCaching,
	},
	sassOptions: {
		additionalData: '@import "styles/Theme.module.scss";',
	},
}))
