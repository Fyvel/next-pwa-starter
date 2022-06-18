import { useEffect, useState } from 'react'
import Snackbar from '@/components/Snackbar'
import IOsDialog from './components/IOsDialog'
import styles from './PwaInstaller.module.scss'
import usePromptPwa from '@/hooks/usePromptPwa'

export default function PwaInstaller() {
	const [showInstallPwa, setShowInstallPwa] = useState(false)
	const [showIOsDialog, setShowIOsDialog] = useState(false)
	const {
		iOsDevice,
		webBrowserName,
		handleWebInstallAccepted
	} = usePromptPwa()

	useEffect(() => {
		if (!window) return
		// Promote PWA installation if not installed
		// Delayed the snackbar so the user doesn't feel harassed heh
		setTimeout(() => {
			const isInStandaloneMode = (
				('standalone' in window.navigator) && (window.navigator.standalone) ||
				window.matchMedia('(display-mode: standalone)').matches
			)
			setShowInstallPwa(!isInStandaloneMode)
		}, 8000)
	}, [])

	const handleInstall = () => {
		setShowInstallPwa(false)
		if (iOsDevice) {
			setShowIOsDialog(true)
			return
		}
		if (!webBrowserName) return
		handleWebInstallAccepted()
	}

	const handleDismiss = () => {
		setShowInstallPwa(false)
	}

	return (
		<>
			<Snackbar
				open={showInstallPwa}
				actions={
					<div className={styles.actions}>
						<button onClick={handleInstall}>Install</button>
						<button onClick={handleDismiss}>Dismiss</button>
					</div>
				}>
				<p>Add <b>Next PWA Starter</b> to your Home screen!</p>
			</Snackbar>
			<IOsDialog open={showIOsDialog} close={() => setShowIOsDialog(false)} />
		</>
	)
}