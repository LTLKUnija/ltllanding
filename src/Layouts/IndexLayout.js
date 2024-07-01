import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Head from "next/head";

function IndexLayout({ children }) {
  const router = useRouter();
  const { locale } = router;

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

  return (
    <div>
      <Script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/33918b941881a09fff1a403a/script.js"
      ></Script>
      <Head>
        <title>
          {locale === "lt" ? "LTL kredito unija" : "LTL Credit Union"}
        </title>
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
