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
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

