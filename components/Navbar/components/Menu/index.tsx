import Link from 'next/link'
import styles from './Menu.module.scss'

type MenuProps = {
	open: boolean,
	onClick: () => void
}
export default function Menu({ open, onClick }: MenuProps) {
	return (
		<div className={`${styles.menu} ${!open
			? `${styles.hide}`
			: `${styles.show}`}`}
		onClick={onClick} >
			<Link href="/">
				<span>Home</span>
			</Link>
			<br />
			<Link href="/does-not-exist">
				<span>Inexisting page</span>
			</Link >
		</div >
	)
}

export function Burger({ open, onClick }: MenuProps) {
	return (
		<button className={`${styles.burger} ${open
			? `${styles.close}`
			: `${styles.open}`}`}
		onClick={onClick}>
			<span />
			<span />
			<span />
		</button>
	)
}