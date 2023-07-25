import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import CookieConsent from "@/components/CookieConsent";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

function IndexLayout({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  const [showLinks, setShowLinks] = useState({
    usefulLinks: false,
    aboutUs: false,
    accountability: false,
    possibilities: false,
  });

  const GetCookies = (cookiename) => {
    return Cookies.get(cookiename);
  };

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

  useEffect(() => {
    if (!GetCookies("LLP-Cookie")) {
      setShowPopup(true);
    }
  }, []);

  return (
    <div className="main-layout">
      <Header />
      {children}
      <Footer showLinks={showLinks} setShowLinks={setShowLinks} />
      {showPopup && <CookieConsent setShowPopup={setShowPopup} />}
    </div>
  );
}

export default IndexLayout;
