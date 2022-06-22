import { useEffect, useState } from 'react'
import { useAppContext } from '@/context/AppContext'
import styles from './Home.module.scss'

export default function Home() {
	const [memeUrl, setMemeUrl] = useState('')
	const { fetchRandomMeme } = useAppContext()

	useEffect(() => {
		const fetchMeme = async () => {
			const newMeme = await fetchRandomMeme()
			setMemeUrl(newMeme)
		}
		fetchMeme()
		const timer = setInterval(fetchMeme, 10000)
		return () => clearInterval(timer)
	}, [fetchRandomMeme])

	return (
		<>
			<h1>Home page</h1>
			<section className={styles.content}>
				<article className={styles.article}>
					{memeUrl
						// eslint-disable-next-line @next/next/no-img-element
						? <img className={styles.image} alt="Some random meme" src={memeUrl} />
						: <div className={styles.waiting}>Wait for it...</div>
					}
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in nulla id purus maximus finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id quam risus. Morbi sollicitudin metus scelerisque ultrices aliquam. Integer a lacus vitae purus fringilla posuere a at libero. Mauris fringilla, ipsum sed pellentesque fermentum, risus ligula ultrices lectus, id fringilla nulla quam suscipit massa. Sed blandit massa a eros cursus vehicula. Vestibulum fermentum finibus risus eu consectetur. Pellentesque vestibulum iaculis odio, quis semper nisl posuere eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Maecenas odio est, convallis a ultricies non, placerat et sapien. Maecenas et elit eget urna maximus elementum. Suspendisse lobortis, turpis id maximus fermentum, eros elit mattis ipsum, ac faucibus dui augue eu mi. Nam convallis lectus nunc, ut dapibus lacus viverra a.
					</p>
				</article>
				<p>
					<i>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in nulla id purus maximus finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id quam risus. Morbi sollicitudin metus scelerisque ultrices aliquam. Integer a lacus vitae purus fringilla posuere a at libero. Mauris fringilla, ipsum sed pellentesque fermentum, risus ligula ultrices lectus, id fringilla nulla quam suscipit massa. Sed blandit massa a eros cursus vehicula. Vestibulum fermentum finibus risus eu consectetur. Pellentesque vestibulum iaculis odio, quis semper nisl posuere eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Maecenas odio est, convallis a ultricies non, placerat et sapien. Maecenas et elit eget urna maximus elementum. Suspendisse lobortis, turpis id maximus fermentum, eros elit mattis ipsum, ac faucibus dui augue eu mi. Nam convallis lectus nunc, ut dapibus lacus viverra a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in nulla id purus maximus finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id quam risus. Morbi sollicitudin metus scelerisque ultrices aliquam. Integer a lacus vitae purus fringilla posuere a at libero. Mauris fringilla, ipsum sed pellentesque fermentum, risus ligula ultrices lectus, id fringilla nulla quam suscipit massa. Sed blandit massa a eros cursus vehicula. Vestibulum fermentum finibus risus eu consectetur. Pellentesque vestibulum iaculis odio, quis semper nisl posuere eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Maecenas odio est, convallis a ultricies non, placerat et sapien. Maecenas et elit eget urna maximus elementum. Suspendisse lobortis, turpis id maximus fermentum, eros elit mattis ipsum, ac faucibus dui augue eu mi. Nam convallis lectus nunc, ut dapibus lacus viverra a.
					</i>
				</p>
			</section>
		</>
	)
};
