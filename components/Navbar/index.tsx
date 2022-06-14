import { useState } from "react";
import Icon from "@/components/Icon";
import Menu, { Burger } from "./components/Menu";
import styles from "./Navbar.module.scss";
import { ThemeType } from "@/types/";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [theme, setTheme] = useState<ThemeType>('light')

	const handleThemeChange = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		localStorage.setItem('theme', newTheme);
		document.documentElement.className = `theme-${newTheme}`;
		setTheme(newTheme)
	}
	return (
		<>
			<nav className={styles.navbar}>
				<Burger open={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
				<h1>What a Navbar!</h1>
				<Icon size={36} onClick={handleThemeChange}>
					{theme === 'light' ? 'brightness_5' : 'brightness_4'}
				</Icon>
			</nav>
			<Menu open={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
		</>
	)
}