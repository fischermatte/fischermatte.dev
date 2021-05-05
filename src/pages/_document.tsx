import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body className={'theme-dark'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
