import { ReactNode } from 'react'
import styles from './Snackbar.module.scss'

type SnackbarProps = {
	open: boolean,
	actions?: ReactNode,
	children: ReactNode
}
export default function Snackbar({ open, actions, children }: SnackbarProps) {
	return (
		<div className={`${styles.snackbar} ${open ? styles.show : ''}`}>
			<>{children}</>
			<>{actions}</>
		</div>
	)
}