export default function MemeApiService(baseUrl: string) {
	const fetchRandomMeme = async () => fetch(`${baseUrl}/gimme`, { method: 'GET' })
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error: The status is ${response.status}`)
			}
			return response.json()
		})
		.then((data: any) => data.url as string)
		.catch((err) => {
			// TODO: create error handler
			console.log(err.message)
			return ''
		})

	return {
		fetchRandomMeme,
	}
}
