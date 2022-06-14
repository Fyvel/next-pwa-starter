import { useState } from "react";
import Icon from "@/components/Icon";
import Menu, { Burger } from "./components/Menu";
import styles from "./Navbar.module.scss";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<>
			<nav className={styles.navbar}>
				<Burger open={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
				<h1>What a Navbar!</h1>
				<Icon size={36}>brightness_5</Icon>
			</nav>
			<Menu open={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
		</>
	)
}