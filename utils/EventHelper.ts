export const EventLogger = (event: Event) => {
	if (process.env.NODE_ENV === 'production') return
	console.log(`Event ${event.type} is triggered.`)
	console.log(event)
}