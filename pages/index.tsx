import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
	return (
		<div>
			<Link href="/does-not-exist">
				<a>
					<h2>Page that does not exist</h2>
				</a>
			</Link>
		</div>
	)
}

export default Home
