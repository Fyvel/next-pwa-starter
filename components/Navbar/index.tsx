import { useState } from "react";
import Menu, { Burger } from "./components/Menu";
import styles from "./Navbar.module.scss";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)


	return (
		<>
			<nav className={styles.navbar}>
				<Burger open={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
				<h1>What a Navbar!</h1>
				<div>🥖🥖</div>
			</nav>
			<Menu open={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
		</>
	)
}