import Icon from '@/components/Icon'
import Link from 'next/link'
import styles from './Menu.module.scss'

type MenuProps = {
	open: boolean,
	onClick: () => void
}
export default function Menu({ open, onClick }: MenuProps) {
	return (
		<div
			className={`${styles.menu} ${!open
				? `${styles.hide}`
				: `${styles.show}`}`}
			onClick={onClick}>
			<div className={styles['link-list']}>
				<Link href="/">
					<a className={styles.link}>
						<Icon size={36} variant='primary'>home</Icon>
						<h2>Home</h2>
					</a>
				</Link>
				<Link href="/does-not-exist">
					<a className={styles.link}>
						<Icon size={36} variant='primary'>switch_access_shortcut</Icon>
						<h2>Inexisting page</h2>
					</a>
				</Link>
			</div>
		</div>
	)
}

export function Burger({ open, onClick }: MenuProps) {
	return (
		<button
			aria-label='menu'
			className={`${styles.burger} ${open
				? `${styles.close}`
				: `${styles.open}`}`}
			onClick={onClick}>
			<span />
			<span />
			<span />
		</button>
	)
}