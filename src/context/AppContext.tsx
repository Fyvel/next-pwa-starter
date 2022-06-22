import ServiceFactory, { Clients, Services } from '@/api/ServiceFactory'
import { createContext, PropsWithChildren, useContext } from 'react'

type AppContextDefinition = Services
const AppContext = createContext<AppContextDefinition | undefined>(undefined)

export const useAppContext = () => {
	const context = useContext(AppContext)
	if (!context) throw Error('AppContext hasn\'t been provided!')
	return context
}

type Props = {
	clients: Clients
}
export default function AppContextProvider(props: PropsWithChildren<Props>) {
	const appServices = ServiceFactory({
		memeApiUrl: props.clients.memeApiUrl,
	})

	return (
		<AppContext.Provider value={{ ...appServices }}>
			{props.children}
		</AppContext.Provider>
	)
}