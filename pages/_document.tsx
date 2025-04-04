import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();

        try {
            ctx.renderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    {
                        // @ts-ignore
                        this.props.styleTags
                    }
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;