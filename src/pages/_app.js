import "@/styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../firebase.js";
import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script"; // Importing Next.js Script component

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const nonce = typeof document !== 'undefined' ? (document.querySelector('meta[name="csp-nonce"]')?.getAttribute('content') || '') : ''

  useEffect(() => {
    const locale = router.locale || "lt";
    document.cookie = `NEXT_LOCALE=${locale}; path=/`;
  }, [router.locale]);

  return (
    <Provider store={store}>
      {/* Google Analytics Script */}
      {nonce && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-6Z2XJJXYH2"
            strategy="afterInteractive"
            nonce={nonce}
          />
          <Script id="gtag-init" strategy="afterInteractive" nonce={nonce}>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6Z2XJJXYH2', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      <Component {...pageProps} />
    </Provider>
  );
};

export default appWithTranslation(App);
