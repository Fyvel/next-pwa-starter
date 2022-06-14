import { PropsWithChildren } from 'react'
import styles from './Icon.module.scss'

type IconProps = {
	size?: 18 | 24 | 36 | 48,
	variant?: 'default' | 'primary' | 'secondary',
	onClick?: () => void,
}
export default function Icon({
	size = 24,
	variant = 'default',
	onClick,
	children
}: PropsWithChildren<IconProps>) {
	return (
		<div
			className={`${styles.icon} ${styles[variant]} ${onClick ? styles.action : ''}`}
			onClick={onClick}>
			<span className={`${styles['material-icons']} ${styles[`md${size}`]}`}>
				{children}
			</span>
		</div>
	)
}