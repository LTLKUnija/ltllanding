import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { useState, useEffect } from "react";
import Script from "next/script";

function IndexLayout({ children }) {
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
      <div className="main-layout">
        <Header />
        {children}
        <Footer showLinks={showLinks} setShowLinks={setShowLinks} />
      </div>
    </div>
  );
}

export default IndexLayout;
