import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";

function Footer() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  const [showLinks, setShowLinks] = useState({
    usefulLinks: false,
    aboutUs: false,
    accountability: false,
    possibilities: false,
  });

  const handleClick = (e) => {
    const key = e.target.dataset.id;
    setShowLinks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <footer id="footer">
      <div
        className={`footer-navigation-section ${
          showLinks.usefulLinks ? "useful-links" : ""
        }`}
      >
        <div className="footer-navigation-header">
          <h4
            className="footer-navigation-section-title"
            style={{ width: "100px" }}
          >
            {t.footerNavLinks.usefulLinks}
          </h4>
          <div>
            <Image
              src="/assets/images/chevron.svg"
              width={14}
              height={8}
              alt="check"
              data-id="usefulLinks"
              onClick={(e) => handleClick(e)}
              className={showLinks.usefulLinks ? "" : "rotate"}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <Link className="footer-navigation-link" href="/pricelist">
          {t.footerNavLinks.priceList}
        </Link>
        <Link className="footer-navigation-link" href="/terms-and-conditions">
          {t.footerNavLinks.termsAndCond}
        </Link>
        <Link className="footer-navigation-link" href="/privacy-policy">
          {t.footerNavLinks.ppAndCookies}
        </Link>
        <Link className="footer-navigation-link" href="/security">
          {t.footerNavLinks.security}
        </Link>
        <Link className="footer-navigation-link" href="/suport-and-complaints">
          {t.footerNavLinks.support}
        </Link>
      </div>
      <div
        className={`footer-navigation-section ${
          showLinks.aboutUs ? "useful-links" : ""
        }`}
      >
        <div className="footer-navigation-header">
          <h4
            className="footer-navigation-section-title"
            style={{ width: "100px" }}
          >
            {t.footerNavLinks.aboutUs}
          </h4>
          <div>
            <Image
              src="/assets/images/chevron.svg"
              width={14}
              height={8}
              alt="check"
              data-id="aboutUs"
              onClick={(e) => handleClick(e)}
              className={showLinks.aboutUs ? "" : "rotate"}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <Link className="footer-navigation-link" href="/management">
          {t.footerNavLinks.management}
        </Link>
        <Link className="footer-navigation-link" href="/share-holders">
          {t.footerNavLinks.shareholders}
        </Link>
        <Link className="footer-navigation-link" href="/news">
          {t.footerNavLinks.news}
        </Link>
        <Link className="footer-navigation-link" href="/licence">
          {t.footerNavLinks.license}
        </Link>
      </div>
      <div
        className={`footer-navigation-section ${
          showLinks.accountability ? "useful-links" : ""
        }`}
      >
        <div className="footer-navigation-header">
          <h4 className="footer-navigation-section-title">
            {t.footerNavLinks.accountability}
          </h4>
          <div>
            <Image
              src="/assets/images/chevron.svg"
              width={14}
              height={8}
              alt="check"
              data-id="accountability"
              onClick={(e) => handleClick(e)}
              className={showLinks.accountability ? "" : "rotate"}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <Link className="footer-navigation-link" href="/financial-reporting">
          {t.footerNavLinks.financialAccountability}
        </Link>
        <Link className="footer-navigation-link" href="/esg">
          {t.footerNavLinks.esg}
        </Link>
        <Link className="footer-navigation-link" href="/money-loundrying">
          {t.footerNavLinks.moneyLoundering}
        </Link>
      </div>
      <div
        className={`footer-navigation-section ${
          showLinks.possibilities ? "useful-links" : ""
        }`}
      >
        <div className="footer-navigation-header">
          <h4
            className="footer-navigation-section-title"
            style={{ width: "100px" }}
          >
            {t.footerNavLinks.possibilities}
          </h4>
          <div>
            <Image
              src="/assets/images/chevron.svg"
              width={14}
              height={8}
              alt="check"
              data-id="possibilities"
              onClick={(e) => handleClick(e)}
              className={showLinks.possibilities ? "" : "rotate"}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <Link className="footer-navigation-link" href="/partnership">
          {t.footerNavLinks.partner}
        </Link>
        <Link className="footer-navigation-link" href="/open-banking">
          {t.footerNavLinks.api}
        </Link>
        <Link className="footer-navigation-link" href="/career">
          {t.footerNavLinks.career}
        </Link>
      </div>
      <div className="footer-navigation-section mobile">
        <div className="mobile_adress">
          <h4 className="footer-navigation-section-title">
            {t.footerNavLinks.contacts}
          </h4>

          <Link className="footer-navigation-link adress" href="/pricelist">
            {t.footerNavLinks.address}
          </Link>
          <div className="social-links-block">
            <Link className="social-link" href="/pricelist">
              <Image
                width={8}
                height={18}
                alt="fb-icon"
                src="/assets/images/fb-icon.svg"
              />
            </Link>
            <Link className="social-link" href="/pricelist">
              <Image
                width={20}
                height={18}
                alt="fb-icon"
                src="/assets/images/LN-icon.svg"
              />
            </Link>
          </div>
        </div>
        <div className="footer-navigation-section footer-img">
          <Link className="social-link" href="/">
            <Image
              src="/assets/images/ltl-logo-white.svg"
              alt="Picture of the author"
              width={90}
              height={46}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
