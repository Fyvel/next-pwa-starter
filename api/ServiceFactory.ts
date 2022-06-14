import MemeApiService from "./meme-service"

export default function ServiceFactory(clients: Clients) {
	const memeApiService = MemeApiService(clients.memeApiUrl)

	return {
		...memeApiService,
	}
}
export type Services = ReturnType<typeof ServiceFactory>
export type Clients = {
	memeApiUrl: string,
} 