import { ReactNode } from "react"
import styles from "./Layout.module.css"

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className={styles.layout}>
			<header>Navbar</header>
			<main>{children}</main>
			<footer>Footer</footer>
		</div>
	)
}
