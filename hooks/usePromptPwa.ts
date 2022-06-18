import { useEffect, useState } from 'react'

const getPwaPromptLastSeenAt = (promptName: string) =>
	sessionStorage.getItem(promptName) || new Date().toISOString()

const setPwaPromptSeenToday = (promptName: string): void => {
	const today = new Date().toISOString()
	sessionStorage.setItem(promptName, today)
}

const shouldPromptPwaInstall = (
	promptName: string,
	daysToWaitBeforePromptingAgain: number): boolean => {
	if (window.matchMedia('(display-mode: standalone)').matches)
		return false
	const lastPrompt = new Date(getPwaPromptLastSeenAt(promptName)).getTime()
	const today = Date.now()
	const daysSinceLastPrompt = (today - lastPrompt) / (1000 * 60 * 60 * 24)
	return isNaN(daysSinceLastPrompt) || daysSinceLastPrompt >= daysToWaitBeforePromptingAgain
}

const getWebBrowserName = (userAgent: string) => {
	const pwaCompatibleBrowsers = [
		{
			name: 'Chrome',
			verify: (ua: string) => ua.indexOf('Chrome') != -1
		},
		{
			name: 'Edge',
			verify: (ua: string) => (ua.indexOf('Edge') != -1)
		},
		{
			name: 'Firefox',
			verify: (ua: string) => ua.indexOf('Firefox') != -1
		},
		{
			name: 'Opera',
			verify: (ua: string) => (ua.indexOf('Opera') || ua.indexOf('OPR')) != -1
		},
	]

	const isPwaCompatible = pwaCompatibleBrowsers.reduce((acc, browser) => {
		acc = browser.verify(userAgent) ? browser.name : acc
		return acc
	}, null as string | null)
	return isPwaCompatible
}

const getIOsDeviceName = (userAgent: string) => {
	const iOsDevices = [
		{ name: 'iPad', verify: (ua: string) => !!ua.match(/iPad/i) },
		{ name: 'iPhone', verify: (ua: string) => !!ua.match(/iPhone/i) },
		{ name: 'iPod', verify: (ua: string) => !!ua.match(/iPod/i) }]

	const iOsDeviceName = iOsDevices.reduce((acc, iOsDevice) => {
		acc = iOsDevice.verify(userAgent) ? iOsDevice.name : acc
		return acc
	}, null as string | null)
	return iOsDeviceName
}


export default function usePromptPwa(
	promptName = 'InstallPromptedAt',
	daysToWaitBeforePromptingAgain = 0) {
	const [webInstallPromptEvent, setWebInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null)
	const [webBrowserName, setWebBrowserName] = useState<string | null>(null)
	const [iOsDevice, setIOsDevice] = useState<string | null>(null)

	const [userShouldBePromptedToInstall, setUserShouldBePromptedToInstall] = useState<boolean>()

	const handleUserSeeingInstallPrompt = () => {
		setUserShouldBePromptedToInstall(false)
		setPwaPromptSeenToday(promptName)
	}

	const handleWebInstallAccepted = () => {
		// show native prompt
		webInstallPromptEvent?.prompt()

		// decide what to do after the user chooses
		webInstallPromptEvent?.userChoice.then(choice => {
			// if the user declined, we don't want to show the prompt again
			if (choice.outcome !== 'accepted') {
				setUserShouldBePromptedToInstall(false)
				setPwaPromptSeenToday(promptName)
			}
			setWebInstallPromptEvent(null)
		})
	}

	useEffect(() => {
		const ua = window.navigator.userAgent
		setWebBrowserName(getWebBrowserName(ua))
		setIOsDevice(getIOsDeviceName(ua))
		setUserShouldBePromptedToInstall(shouldPromptPwaInstall(promptName, daysToWaitBeforePromptingAgain))
	}, [daysToWaitBeforePromptingAgain, promptName])

	useEffect(() => {
		const beforeInstallPromptHandler = (event: BeforeInstallPromptEvent) => {
			event.preventDefault()
			// check if user has already been asked
			if (userShouldBePromptedToInstall) {
				// store the event for later use
				setWebInstallPromptEvent(event)
			}
		}

		window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler)
		return () => window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler)
	}, [userShouldBePromptedToInstall])

	return {
		webBrowserName,
		iOsDevice,
		handleWebInstallAccepted,
		userShouldBePromptedToInstall,
		handleUserSeeingInstallPrompt,
	}
}

