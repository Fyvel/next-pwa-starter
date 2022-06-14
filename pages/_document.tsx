import Document, {
	Html, Head, Main,
	NextScript, DocumentContext, DocumentInitialProps
} from "next/document";
import MetaTags from "./MetaTags";

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<title>😃 Hello Dániel! 😃</title>
				<Head>
					<MetaTags />
					<link href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

