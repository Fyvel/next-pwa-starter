import { ThemeType } from '@/types/'
import { createContext, useContext, PropsWithChildren, useEffect, useState } from 'react'

type ThemeContextDefinition = {
	theme: ThemeType,
	setTheme: (theme: ThemeType) => void,
	toggleTheme: () => void,
}
const ThemeContext = createContext<ThemeContextDefinition | undefined>(undefined)

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context) throw Error('ThemeContext hasn\'t been provided!')
	return context
}

const applyGlobalTheme = (type: ThemeType) => {
	document.documentElement.className = `theme-${type}`
}

const getTheme = (isDark: boolean): ThemeType => isDark
	? 'dark'
	: 'light'

export default function ThemeContextProvider(props: PropsWithChildren<{}>) {
	const [currentTheme, setCurrentTheme] = useState<ThemeType>('dark')

	useEffect(() => {
		const getActiveTheme = (): ThemeType => {
			// Check for saved theme first
			const existingTheme = localStorage.getItem('theme') as ThemeType | null
			const preferredTheme = window.matchMedia
				? getTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
				: 'light'
			console.log(' LOG:  >  getActiveTheme  >  existingTheme || preferredTheme', existingTheme || preferredTheme)
			return existingTheme || preferredTheme
		}
		setTheme(getActiveTheme())

		if (window.matchMedia) {
			// Listen for user preferred settings changes
			window.matchMedia('(prefers-color-scheme: dark)')
				.addEventListener('change',
					event => applyGlobalTheme(getTheme(event.matches)))
		}
	}, [])

	const setTheme = (newTheme: ThemeType) => {
		localStorage.setItem('theme', newTheme)
		setCurrentTheme(newTheme)
		applyGlobalTheme(newTheme)
	}
	const toggleTheme = () => {
		setTheme(currentTheme === 'dark' ? 'light' : 'dark')
	}

	return (
		<ThemeContext.Provider value={{ theme: currentTheme, setTheme, toggleTheme, }}>
			{props.children}
		</ThemeContext.Provider>
	)
}