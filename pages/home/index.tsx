import Link from 'next/link';

export default function Home(){
	return (
		<div>
			<Link href="/does-not-exist">
				<a>
					<h2>Page that does not exist</h2>
				</a>
			</Link>
		</div>
	);
};
