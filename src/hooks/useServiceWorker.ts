import { useEffect } from 'react'
import { EnumKeys } from '@/utils/EnumHelpers'
import { EventLogger } from '@/utils/EventHelper'

enum WorkerLifeCycleEvent {
	Installed = 'installed',
	Activated = 'activated',
	Controlling = 'controlling',
	Waiting = 'waiting',
	Message = 'message',
	Redundant = 'redundant',
	Externalinstalled = 'externalinstalled',
	Externalactivated = 'externalactivated',
}
type WorkerEvents = { [key in WorkerLifeCycleEvent]?: (event: Event) => void }
type ServiceWorkerEvents = WorkerEvents & {
	promptNewVersionAvailable?: (event?: Event) => boolean;
}
// This hook only run once in browser after the component is rendered for the first time.
export default function useServiceWorker(eventHandler: ServiceWorkerEvents = {}) {
	useEffect(() => {
		if (typeof window === 'undefined' || !('serviceWorker' in navigator) || window.workbox === undefined)
			return

		const promptNewVersionAvailable = eventHandler.promptNewVersionAvailable
			|| (() => confirm('A newer version of this WebApp is available, reload to update?'))

		const wb = window.workbox
		// Add event listeners to handle any of PWA lifecycle events
		for (const eventKey of EnumKeys(WorkerLifeCycleEvent)) {
			const eventName = WorkerLifeCycleEvent[eventKey]
			wb.addEventListener(eventName,
				eventHandler[eventName]
					? eventHandler[eventName]
					: EventLogger)
		}

		// A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install
		const handlePrompt = (installNewVersion: () => boolean) =>
			(event: Event) => {
				EventLogger(event)
				if (installNewVersion()) {
					wb.addEventListener(WorkerLifeCycleEvent.Controlling,
						() => { window.location.reload() })
					wb.messageSkipWaiting()
				} else {
					if (process.env.NODE_ENV === 'production') return
					console.log(
						'User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time.'
					)
				}
			}
		wb.addEventListener(WorkerLifeCycleEvent.Waiting,
			eventHandler[WorkerLifeCycleEvent.Waiting]
				? eventHandler[WorkerLifeCycleEvent.Waiting]
				: handlePrompt(promptNewVersionAvailable))

		// never forget to call register as auto register is turned off in next.config.js
		wb.register()

	}, [eventHandler])
}
