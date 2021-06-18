import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <title>Lana Osmun Music</title>

          <link rel='stylesheet' href='/css/lib/bootstrap-btn.css' />

          <link
            href='https://fonts.googleapis.com/css2?family=Raleway&display=swap'
            rel='stylesheet'
            type='text/css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
