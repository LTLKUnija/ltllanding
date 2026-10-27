import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { useState, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import Seo from "@/components/Seo";

function IndexLayout({ children, seoTitle, seoDescription, canonicalPath }) {
  const [showLinks, setShowLinks] = useState({
    usefulLinks: false,
    aboutUs: false,
    accountability: false,
    possibilities: false,
  });

  const handleScreenSizeChange = (e) => {
    if (e.matches) {
      setShowLinks({
        usefulLinks: true,
        aboutUs: true,
        accountability: true,
        possibilities: true,
      });
    } else {
      setShowLinks({
        usefulLinks: false,
        aboutUs: false,
        accountability: false,
        possibilities: false,
      });
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    handleScreenSizeChange(mediaQuery);

    const handleResize = (e) => handleScreenSizeChange(e);
    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  const isProd = process.env.NODE_ENV === "production";

  return (
    <div>
      {isProd && (
        <Script
          id="cookieyes"
          src="/api/cookieyes"
          strategy="afterInteractive"
          nonce={typeof document !== "undefined" ? (document.querySelector("meta[name=\"csp-nonce\"]")?.getAttribute("content") || "") : ""}
        />
      )}
      <Seo
        title={seoTitle}
        description={seoDescription}
        canonicalPath={canonicalPath}
      />
      <Head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/images/favicon.svg"
        />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
      </Head>
      <div className="main-layout">
        <Header />
        {children}
        <Footer showLinks={showLinks} setShowLinks={setShowLinks} />
      </div>
    </div>
  );
}

export default IndexLayout;
