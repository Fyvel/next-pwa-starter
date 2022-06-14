import { useState } from "react";
import Menu, { Burger } from "./components/Menu";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<>
			<nav>
				<Burger open={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
				<h1>What a navbar!</h1>
			</nav>
			<Menu open={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
		</>
	)
}