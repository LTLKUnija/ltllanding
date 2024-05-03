import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Drawer from "./Drawer";
import { useDispatch } from "react-redux";
import { newsActions } from "../store/news/news.slice";
import { annualReportsActions } from "../store/annualReports/annualReports.slice";
import { quarterReportsActions } from "@/store/quarterReports/quarterReports.slice";
import { priceListActions } from "@/store/priceList/priceList.slice";
import { faqListActions } from "@/store/faqList/faqList.slice";
import { factsheetsActions } from "@/store/factsheets/factsheets.slice";
import {
  getNewsList,
  getAnnualReports,
  getQuarterlReports,
  getPriceList,
  getFaqList,
  getFactsheets,
} from "@/common/dataGetters";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langBtnState, setLangBtnState] = useState("ENG");

  const router = useRouter();
  const isBusiness = router.pathname.includes("/business");

  const { locale } = router;
  const { t } = useTranslation("common");

  const [paymentSubMenu, setPaymentSubMenu] = useState(false);
  const [creditSubMenu, setCreditSubMenu] = useState(false);

  const dispatch = useDispatch();

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

  const dataGetter = async () => {
    const news = await getNewsList();
    dispatch(newsActions.setNews(news));

    const annualReports = await getAnnualReports();
    dispatch(annualReportsActions.setAnnualReports(annualReports));

    const quaterReportsLT = await getQuarterlReports("lt");
    const quaterReportsEN = await getQuarterlReports("en");
    dispatch(quarterReportsActions.setQuarterReportsLT(quaterReportsLT));
    dispatch(quarterReportsActions.setQuarterReportsEN(quaterReportsEN));

    const priceList = await getPriceList();
    dispatch(priceListActions.setPriceList(priceList));

    const faqList = await getFaqList();
    faqList.forEach((faqItem) =>
      dispatch(faqListActions[`set${faqItem.id}`](faqItem))
    );

    const factsheets = await getFactsheets();
    dispatch(factsheetsActions.setFactsheets(factsheets));
  };

  useEffect(() => {
    if (locale === "lt") {
      setLangBtnState("ENG");
    } else {
      setLangBtnState("LT");
    }

    dataGetter();
  }, [locale]);

  function setLanguage() {
    if (langBtnState === "ENG") {
      router.push(router.pathname, router.asPath, { locale: "en" });
    } else {
      router.push(router.pathname, router.asPath, { locale: "lt" });
    }
  }

  return (
    <header>
      <div className="logo-block">
        <Link href={`${isBusiness ? "/business" : ""}/`}>
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
            {t("headerNavLinks.private")}
          </Link>
        ) : (
          <Link className="header-bussinness-type-nav-link" href="/business">
            {t("headerNavLinks.business")}
          </Link>
        )}
      </div>
      <div className="menubar">
        <nav className="header-navigation">
          {isBusiness ? (
            <Link className="header-nav-link" href="/business/deposits">
              {t("headerNavLinks.deposit")}
            </Link>
          ) : (
            <Link className="header-nav-link" href="/deposits">
              {t("headerNavLinks.deposit")}
            </Link>
          )}

          <div
            className="navigation-parent-link-credit header-nav-link"
            onMouseEnter={() => {
              toggleSubMenu("open");
            }}
            onMouseLeave={() => {
              toggleSubMenu("close");
            }}
          >
            {t("headerNavLinks.credit")}
            {creditSubMenu && (
              <div className="dropDownMenu">
                <div className="toggleSubMenu">
                  {isBusiness ? (
                    <Link
                      className="header-nav-link"
                      href="/business/investment-loan"
                    >
                      {t("headerNavLinks.investmentLoan")}
                    </Link>
                  ) : (
                    <Link className="header-nav-link" href="/credits/mortgage">
                      {t("headerNavLinks.mortgageLoan")}
                    </Link>
                  )}
                </div>
                {!isBusiness && (
                  <div className="toggleSubMenu">
                    <Link
                      className="header-nav-link"
                      href="/credits/equity-loan"
                    >
                      {t("headerNavLinks.equityLoan")}
                    </Link>
                  </div>
                )}
                <div className="toggleSubMenu">
                  {isBusiness ? (
                    <Link
                      className="header-nav-link"
                      href="/business/capital-loan"
                    >
                      {t("headerNavLinks.capitalLoan")}
                    </Link>
                  ) : (
                    <Link
                      className="header-nav-link"
                      href="/credits/consumer-loan"
                    >
                      {t("headerNavLinks.consumerLoan")}
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
          <div
            className="navigation-parent-link header-nav-link "
            onMouseEnter={() => {
              toggleSubMenu("open", "payment");
            }}
            onMouseLeave={() => {
              toggleSubMenu("close", "payment");
            }}
          >
            {t("headerNavLinks.payments")}

            {paymentSubMenu && (
              <div className="dropDownMenu">
                <div className="toggleSubMenu">
                  {isBusiness ? (
                    <Link
                      className="header-nav-link"
                      href="/business/current-account"
                    >
                      {t("headerNavLinks.currentAccount")}
                    </Link>
                  ) : (
                    <Link className="header-nav-link" href="/current-account">
                      {t("headerNavLinks.currentAccount")}
                    </Link>
                  )}
                </div>
                <div className="toggleSubMenu">
                  {isBusiness ? (
                    <Link className="header-nav-link" href="/business/payments">
                      {t("headerNavLinks.payments")}
                    </Link>
                  ) : (
                    <Link className="header-nav-link" href="/payments">
                      {t("headerNavLinks.payments")}
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
          <Link className="header-nav-link" href="/contacts">
            {t("headerNavLinks.contacts")}
          </Link>
          <Link className="header-nav-link" href="/faq">
            {t("headerNavLinks.faq")}
          </Link>
          <span
            className="header-nav-link change-language-link show"
            onClick={setLanguage}
            href="/eng"
          >
            {langBtnState}
          </span>
        </nav>
      </div>
      <div className="header-action-buttons-block">
        <Link
          className="header-action-button login"
          href="https://ib.ltlkreditounija.eu/ib/site/login"
        >
          {t("headerNavLinks.login")}
        </Link>
        <Link className="header-action-button openAcc" href="/contacts">
          {t("headerNavLinks.openAccount")}
        </Link>
      </div>
      <Drawer isOpen={isMenuOpen} onClose={handleToggleBurgerMenu} />
    </header>
  );
}

export default Header;
