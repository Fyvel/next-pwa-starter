import { ReactNode } from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import styles from './Layout.module.scss'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className={styles.layout}>
			<header><Navbar /></header>
			<main>{children}</main>
			<footer><Footer/></footer>
		</div>
	)
}
