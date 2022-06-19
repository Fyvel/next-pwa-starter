import { useState } from 'react'
import Icon from '@/components/Icon'
import Menu, { Burger } from './components/Menu'
import styles from './Navbar.module.scss'
import { useTheme } from '@/context/ThemeContext'

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { theme, toggleTheme } = useTheme()

	return (
		<>
			<nav className={styles.navbar}>
				<Burger open={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
				<h1>What a Navbar!</h1>
				<Icon size={36} onClick={toggleTheme}>
					{theme === 'light' ? 'brightness_5' : 'brightness_4'}
				</Icon>
			</nav>
			<Menu open={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
		</>
	)
}