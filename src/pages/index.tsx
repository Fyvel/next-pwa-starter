import useServiceWorker from '@/hooks/useServiceWorker'
import Home from '@/pages/home'

export default function Index() {

	useServiceWorker()

	return (
		<Home />
	)
}


