import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import lt from "@/locales/lt";
import en from "@/locales/en";
import Drawer from "./Drawer";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  const [langBtnState, setLangBtnState] = useState("ENG");

  const router = useRouter();
  const isBusiness = router.pathname.includes("/business");

  const { locale } = router;
  const t = locale === "lt" ? lt : en;

  const [paymentSubMenu, setPaymentSubMenu] = useState(false);
  const [creditSubMenu, setCreditSubMenu] = useState(false);

  const toggleSubMenu = (type, parentLink) => {
    if (parentLink == "payment") {
      if (type === "open") setPaymentSubMenu(true);
      else setPaymentSubMenu(false);
      return;
    }
    if (type === "open") setCreditSubMenu(true);
    else setCreditSubMenu(false);
  };

  const handleToggleBurgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (locale === "lt") {
      setLangBtnState("ENG");
    } else {
      setLangBtnState("LT");
    }
  }, [locale]);

  function setLanguage() {
    if (langBtnState === "ENG") router.push("/", "/", { locale: "en" });
    else router.push("/", "/", { locale: "lt" });
  }

  return (
    <header>
      <div className="logo-block">
        <Link href="/">
          <Image
            src="/assets/images/ltl-logo.svg"
            alt="Picture of the author"
            width={90}
            height={46}
          />
        </Link>
      </div>
      <div className="bussiness-type-block">
        {isBusiness ? (
          <Link className="header-bussinness-type-nav-link" href="/">
            {t.headerNavLinks.private}
          </Link>
        ) : (
          <Link className="header-bussinness-type-nav-link" href="/business">
            {t.headerNavLinks.business}
          </Link>
        )}
      </div>
      <div className="menubar">
        <nav className="header-navigation">
          {isBusiness ? (
            <Link className="header-nav-link" href="/business/deposits">
              {t.headerNavLinks.deposit}
            </Link>
          ) : (
            <Link className="header-nav-link" href="/deposits">
              {t.headerNavLinks.deposit}
            </Link>
          )}
          <div
            className="navigation-parent-link"
            onMouseEnter={() => {
              toggleSubMenu("open", "payment");
            }}
            onMouseLeave={() => {
              toggleSubMenu("close", "payment");
            }}
          >
            {t.headerNavLinks.payments}

            {paymentSubMenu && (
              <div className="dropDownMenu">
                <div className="toggleSubMenu">
                  {isBusiness ? (
                    <Link
                      className="header-nav-link"
                      href="/business/current-account"
                    >
                      {t.headerNavLinks.currentAccount}
                    </Link>
                  ) : (
                    <Link className="header-nav-link" href="/product">
                      {t.headerNavLinks.currentAccount}
                    </Link>
                  )}
                </div>
                <div className="toggleSubMenu">
                  {isBusiness ? (
                    <Link className="header-nav-link" href="/business/payments">
                      {t.headerNavLinks.payments}
                    </Link>
                  ) : (
                    <Link className="header-nav-link" href="/payments">
                      {t.headerNavLinks.payments}
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
          <div
            className="navigation-parent-link-credit"
            onMouseEnter={() => {
              toggleSubMenu("open");
            }}
            onMouseLeave={() => {
              toggleSubMenu("close");
            }}
          >
            {t.headerNavLinks.credit}
            {creditSubMenu && (
              <div className="dropDownMenu">
                <div className="toggleSubMenu">
                  {isBusiness ? (
                    <Link
                      className="header-nav-link"
                      href="/business/investment-loan"
                    >
                      {t.headerNavLinks.investmentLoan}
                    </Link>
                  ) : (
                    <Link className="header-nav-link" href="/credits/mortgage">
                      {t.headerNavLinks.mortgageLoan}
                    </Link>
                  )}
                </div>
                {!isBusiness && (
                  <div className="toggleSubMenu">
                    <Link
                      className="header-nav-link"
                      href="/credits/consumer-loan"
                    >
                      {t.headerNavLinks.consumerLoan}
                    </Link>
                  </div>
                )}
                <div className="toggleSubMenu">
                  {isBusiness ? (
                    <Link
                      className="header-nav-link"
                      href="/business/capital-loan"
                    >
                      {t.headerNavLinks.capitalLoan}
                    </Link>
                  ) : (
                    <Link
                      className="header-nav-link"
                      href="/credits/equity-loan"
                    >
                      {t.headerNavLinks.equityLoan}
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
          <Link className="header-nav-link" href="/contacts">
            {t.headerNavLinks.contacts}
          </Link>
          <span
            className="header-nav-link change-language-link"
            onClick={setLanguage}
            href="/eng"
          >
            {langBtnState}
          </span>
        </nav>
      </div>
      <div className="header-action-buttons-block">
        <Link className="header-action-button" href="/login">
          {t.headerNavLinks.login}
        </Link>
        <Link className="header-action-button" href="/open-account">
          {t.headerNavLinks.openAccount}
        </Link>
      </div>
      <Drawer isOpen={isMenuOpen} onClose={handleToggleBurgerMenu} />
    </header>
  );
}

export default Header;
