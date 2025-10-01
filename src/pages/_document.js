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
            {/* Google Analytics with nonce */}
            <script
              nonce={nonce}
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-6Z2XJJXYH2"
            />
            <script
              nonce={nonce}
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);} 
                  gtag('js', new Date());
                  gtag('config', 'G-6Z2XJJXYH2', { page_path: window.location.pathname });
                `,
              }}
            />
        </Head>
        <body>
          <Main />
          {/* Expose nonce to runtime so dynamically created scripts get nonced */}
          <script
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `
                (function(n){
                  try {
                    // Webpack uses __webpack_require__.nc / __webpack_nonce__ for JSONP chunk loader
                    var w = (typeof window !== 'undefined') ? window : globalThis;
                    w.__webpack_require__ = w.__webpack_require__ || {};
                    w.__webpack_require__.nc = n;
                    w.__webpack_nonce__ = n;
                    // Some Next.js paths may read these
                    w.__next_script_nonce__ = n;
                    w.__NEXT_SCRIPT_NONCE__ = n;
                    try { if (w.__NEXT_DATA__) w.__NEXT_DATA__.nonce = n; } catch (e) {}
                  } catch (e) {}
                })(${JSON.stringify(nonce || '')});
              `,
            }}
          />          
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
