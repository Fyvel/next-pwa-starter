export { }

declare global {
	/**
	 * The BeforeInstallPromptEvent is fired at the Window.onbeforeinstallprompt handler
	 * before a user is prompted to "install" a web site to a home screen on mobile.
	 *
	 * Only supported on Chrome and Android Webview.
	 * https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent
	 */
	interface BeforeInstallPromptEvent extends Event {
		readonly platforms: Array<string>
		readonly userChoice: Promise<{
			outcome: 'accepted' | 'dismissed',
			platform: string
		}>
		prompt(): Promise<void>
	}

	interface Window extends ServiceWorkerGlobalScope {
		workbox: workbox
	}

	interface WindowEventMap extends ServiceWorkerGlobalScopeEventMap {
		beforeinstallprompt: BeforeInstallPromptEvent
	}

	interface Navigator {
		standalone?: boolean
	}
}
