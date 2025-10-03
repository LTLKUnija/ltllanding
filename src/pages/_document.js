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

                    // Avoid double patching
                    if (!w.__cspNoncePatched__) {
                      w.__cspNoncePatched__ = true;

                      // 1) Ensure elements created programmatically get a nonce
                      var d = document;
                      var origCreate = d.createElement;
                      d.createElement = function(name, options) {
                        var el = origCreate.call(d, name, options);
                        try {
                          var t = (name || '').toString().toUpperCase();
                          if (t === 'SCRIPT' || t === 'STYLE') {
                            if (!el.getAttribute('nonce')) el.setAttribute('nonce', n);
                          }
                        } catch (_) {}
                        return el;
                      };

                      // 2) Patch common DOM insertion methods to attach nonce pre-insert
                      function patchInsert(proto, method) {
                        var orig = proto && proto[method];
                        if (!orig) return;
                        proto[method] = function(node) {
                          try {
                            if (node && node.nodeType === 1) {
                              var tag = node.tagName;
                              if ((tag === 'SCRIPT' || tag === 'STYLE') && !node.getAttribute('nonce')) {
                                node.setAttribute('nonce', n);
                              }
                            }
                          } catch (_) {}
                          return orig.apply(this, arguments);
                        };
                      }
                      patchInsert(Element.prototype, 'appendChild');
                      patchInsert(Element.prototype, 'insertBefore');
                      patchInsert(Element.prototype, 'replaceChild');

                      // 3) Intercept HTML string insertions to inject nonce attributes at parse time
                      var reTag = /<(script|style)(\b[^>]*)?>/gi;
                      var origIAH = Element.prototype.insertAdjacentHTML;
                      if (origIAH) {
                        Element.prototype.insertAdjacentHTML = function(pos, html) {
                          try {
                            if (typeof html === 'string' && html.indexOf('<') !== -1) {
                              html = html.replace(reTag, function(m, tag, attrs) {
                                return '<' + tag + (attrs || '') + ' nonce="' + n + '">';
                              });
                            }
                          } catch (_) {}
                          return origIAH.call(this, pos, html);
                        };
                      }

                      var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
                      if (desc && desc.set) {
                        Object.defineProperty(Element.prototype, 'innerHTML', {
                          get: desc.get,
                          set: function(value) {
                            try {
                              if (typeof value === 'string' && value.indexOf('<') !== -1) {
                                value = value.replace(reTag, function(m, tag, attrs) {
                                  return '<' + tag + (attrs || '') + ' nonce="' + n + '">';
                                });
                              }
                            } catch (_) {}
                            return desc.set.call(this, value);
                          },
                          enumerable: desc.enumerable,
                          configurable: true,
                        });
                      }

                      // 4) Fallback observer to catch any late-added nodes
                      try {
                        var mo = new MutationObserver(function(muts){
                          for (var i = 0; i < muts.length; i++) {
                            var nodes = muts[i].addedNodes;
                            for (var j = 0; j < nodes.length; j++) {
                              var node = nodes[j];
                              if (node && node.nodeType === 1) {
                                var tag = node.tagName;
                                if ((tag === 'SCRIPT' || tag === 'STYLE') && !node.getAttribute('nonce')) {
                                  node.setAttribute('nonce', n);
                                }
                                if (node.querySelectorAll) {
                                  var list = node.querySelectorAll('script,style');
                                  for (var k = 0; k < list.length; k++) {
                                    if (!list[k].getAttribute('nonce')) list[k].setAttribute('nonce', n);
                                  }
                                }
                              }
                            }
                          }
                        });
                        mo.observe(document.documentElement, { childList: true, subtree: true });
                      } catch (_) {}
                    }
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
