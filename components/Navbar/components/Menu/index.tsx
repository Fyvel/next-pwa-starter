import Link from 'next/link'

type MenuProps = {
	open: boolean,
	onClick: () => void
}
export default function Menu({ open, onClick }: MenuProps) {
	return open
		? (
			<div onClick={onClick}>
				<Link href="/">
					<span>Home</span>
				</Link>
				<br />
				<Link href="/does-not-exist">
					<span>Inexisting page</span>
				</Link >
			</div>
		)
		: <></>
}

export function Burger({ open, onClick }: MenuProps) {
	return (
		<button onClick={onClick}>
			{!open ? 'Open' : 'Close'} menu
		</button>
	)
}