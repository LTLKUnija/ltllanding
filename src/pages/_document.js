import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const req = ctx.req
    const res = ctx.res
    const fromHeader = (req && req.headers && req.headers['x-csp-nonce']) || (res && res.getHeader && res.getHeader('x-csp-nonce')) || ''
    const cookieHeader = (req && req.headers && req.headers['cookie']) || ''
    const cookieNonceMatch = cookieHeader.match(/(?:^|;\s*)csp-nonce=([^;]+)/)
    const fromCookie = cookieNonceMatch ? decodeURIComponent(cookieNonceMatch[1]) : ''
    const nonce = fromHeader || fromCookie || ''
    return { ...initialProps, nonce }
  }

  render() {
    const { nonce } = this.props
    return (
      <Html lang="en">
        <Head nonce={nonce}>
            <meta name="csp-nonce" content={nonce} />
            <link nonce={nonce} rel="preconnect" href="https://fonts.googleapis.com" />
            <link nonce={nonce} rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link nonce={nonce} href="https://fonts.googleapis.com/css2?family=Lexend:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <script
            id="__NEXT_DATA__"
            type="application/json"
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(this.props.__NEXT_DATA__),
            }}
          />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    )
  }
}

export default MyDocument
