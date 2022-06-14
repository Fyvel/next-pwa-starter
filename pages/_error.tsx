import { NextPageContext } from "next";
import Link from "next/link";

type ErrorProps = { statusCode: number }
export default function Error({ statusCode }: ErrorProps) {
	return (
		<>
			<h1>
				{statusCode === 404
					? 'Page not found mate 😕'
					: 'That page is broken mate 😭'}
			</h1>
			<p>Status code: {statusCode}</p>
			<Link href="/">
				<a>Go back home</a>
			</Link>
		</>
	)
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
	const statusCode = res
		? res.statusCode
		: err
			? err?.statusCode
			: 404
	return { statusCode }
}