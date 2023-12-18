import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Footer({ setShowLinks, showLinks }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const isBusiness = router.pathname.includes("/business");

  const handleClick = (e) => {
    const key = e.target.dataset.id;
    setShowLinks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <footer id="footer">
      <div className="footerWrapper">
        <div
          className={`footer-navigation-section ${
            showLinks.usefulLinks ? "useful-links" : ""
          }`}
        >
          <div className="footer-navigation-header">
            <h4
              className="footer-navigation-section-title"
              data-id="usefulLinks"
              onClick={(e) => handleClick(e)}
            >
              {t("footerNavLinks.usefulLinks")}
            </h4>
            <div
              className="chevron"
              onClick={(e) => handleClick(e)}
              data-id="usefilLinks"
            >
              <Image
                src="/assets/images/chevron.svg"
                width={14}
                height={8}
                alt="check"
                data-id="usefulLinks"
                className={`chevron ${showLinks.usefulLinks ? "" : "rotate"}`}
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          <Link
            className="footer-navigation-link"
            href={`${isBusiness ? "/business" : ""}/pricelist`}
          >
            {t("footerNavLinks.priceList")}
          </Link>

          <Link className="footer-navigation-link" href="/terms-and-conditions">
            {t("footerNavLinks.termsAndCond")}
          </Link>
          <Link className="footer-navigation-link" href="/privacy-policy">
            {t("footerNavLinks.ppAndCookies")}
          </Link>
          <Link className="footer-navigation-link" href="/security">
            {t("footerNavLinks.security")}
          </Link>
          <Link
            className="footer-navigation-link"
            href="/suport-and-complaints"
          >
            {t("footerNavLinks.support")}
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
              onClick={(e) => handleClick(e)}
              data-id="aboutUs"
            >
              {t("footerNavLinks.aboutUs")}
            </h4>

            <div
              className="chevron"
              onClick={(e) => handleClick(e)}
              data-id="aboutUs"
            >
              <Image
                src="/assets/images/chevron.svg"
                width={14}
                height={8}
                alt="check"
                data-id="aboutUs"
                className={`chevron ${showLinks.aboutUs ? "" : "rotate"}`}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <Link className="footer-navigation-link" href="/management">
            {t("footerNavLinks.management")}
          </Link>

          <Link className="footer-navigation-link" href="/news">
            {t("footerNavLinks.news")}
          </Link>
          <Link className="footer-navigation-link" href="/licence">
            {t("footerNavLinks.license")}
          </Link>
          <Link className="footer-navigation-link" href="/faq">
            {t("headerNavLinks.faq")}
          </Link>
        </div>
        <div
          className={`footer-navigation-section ${
            showLinks.accountability ? "useful-links" : ""
          }`}
        >
          <div className="footer-navigation-header">
            <h4
              className="footer-navigation-section-title"
              data-id="accountability"
              onClick={(e) => handleClick(e)}
            >
              {t("footerNavLinks.accountability")}
            </h4>
            <div
              className="chevron"
              onClick={(e) => handleClick(e)}
              data-id="accountability"
            >
              <Image
                src="/assets/images/chevron.svg"
                width={14}
                height={8}
                alt="check"
                data-id="accountability"
                className={`chevron ${
                  showLinks.accountability ? "" : "rotate"
                }`}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <Link className="footer-navigation-link" href="/financial-reporting">
            {t("footerNavLinks.financialAccountability")}
          </Link>
          <Link className="footer-navigation-link" href="/esg">
            {t("footerNavLinks.esg")}
          </Link>
          <Link className="footer-navigation-link" href="/money-loundrying">
            {t("footerNavLinks.moneyLoundering")}
          </Link>
        </div>
        <div
          className={`footer-navigation-section mBottom ${
            showLinks.possibilities ? "useful-links" : ""
          }`}
        >
          <div className="footer-navigation-header">
            <h4
              className="footer-navigation-section-title"
              style={{ width: "100px" }}
              data-id="possibilities"
              onClick={(e) => handleClick(e)}
            >
              {t("footerNavLinks.possibilities")}
            </h4>
            <div
              className="chevron"
              onClick={(e) => handleClick(e)}
              data-id="possibilities"
            >
              <Image
                src="/assets/images/chevron.svg"
                width={14}
                height={8}
                alt="check"
                data-id="possibilities"
                className={`chevron ${showLinks.possibilities ? "" : "rotate"}`}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <Link className="footer-navigation-link" href="/partnership">
            {t("footerNavLinks.partner")}
          </Link>
          <Link className="footer-navigation-link" href="/open-banking">
            {t("footerNavLinks.api")}
          </Link>
          {/* Client asked to hide this content for now */}
          {/* <Link className="footer-navigation-link" href="/career">
            {t("footerNavLinks.career")}
          </Link> */}
        </div>
        <div className="footer-navigation-section mobile">
          <div className="mobile_adress">
            <h4 className="footer-navigation-section-title">
              {t("footerNavLinks.contacts")}
            </h4>

            <Link className="footer-navigation-link adress" href="/contacts">
              {t("footerNavLinks.address")}
            </Link>
            <div className="social-links-block">
              <Link
                className="social-link"
                target="_blank"
                href="https://www.facebook.com/LTLKreditoUnija"
              >
                <Image
                  width={8}
                  height={18}
                  alt="fb-icon"
                  src="/assets/images/fb-icon.svg"
                />
              </Link>
              <Link
                className="social-link"
                target="_blank"
                href="https://www.linkedin.com"
              >
                <Image
                  width={20}
                  height={18}
                  alt="fb-icon"
                  src="/assets/images/LN-icon.svg"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-navigation-section footer-img logo-block">
          <Link className="social-link ltl-mobile" href="/">
            <Image
              src="/assets/images/ltl-logo-white.svg"
              alt="Picture of the author"
              width={90}
              height={46}
            />
          </Link>

          <Link
            className="social-link"
            target="_blank"
            href="https://www.kreda.lt/jcku-kreda-grupe-jungtine-centrine-kredito-unija/"
          >
            <Image
              src="/assets/images/kreda-logo.svg"
              alt="Picture of the author"
              width={149}
              height={33}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
