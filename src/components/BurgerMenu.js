import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/BurgerMenu.module.scss";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";
import Image from "next/image";

const BurgerMenu = ({ isOpen, onClose }, ref) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "lt" ? lt : en;
  const isBusiness = router.pathname.includes("/business");
  const [langBtnState, setLangBtnState] = useState("ENG");

  const [showInnerLinks, setShowInnerLinks] = useState({
    payment: false,
    credit: false,
  });

  const handleShowInnerLinks = (e) => {
    const key = e.target.dataset.id;
    setShowInnerLinks((prev) => ({ ...prev, [key]: !prev[key] }));
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
    <div
      ref={ref}
      className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}
    >
      <div className={styles.burgerHeader}>
        {isBusiness ? (
          <Link className={styles.burgerLink} href="/">
            {t.headerNavLinks.private}
          </Link>
        ) : (
          <Link className={styles.burgerLink} href="/business">
            {t.headerNavLinks.business}
          </Link>
        )}
        <div onClick={onClose} style={{ cursor: "pointer" }}>
          <Image
            src="/assets/images/close.svg"
            width={15}
            height={15}
            alt="check"
          />
        </div>
      </div>

      {isBusiness ? (
        <div className={styles.burgerBox}>
          <Link className={styles.burgerLink} href="/business/deposit">
            {t.headerNavLinks.deposit}
          </Link>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "270px",
            }}
          >
            <p className={styles.burgerLink}>{t.headerNavLinks.payments}</p>
            <Image
              src="/assets/images/chevronBlack.svg"
              width={14}
              height={8}
              alt="check"
              data-id="payment"
              onClick={(e) => handleShowInnerLinks(e)}
              className={`${showInnerLinks.payment ? "" : styles.rotate}`}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          <div
            className={`${
              showInnerLinks.payment
                ? styles.showInnerLink
                : styles.hideInnerLink
            }`}
          >
            <Link
              className={styles.burgerLink}
              href="/business/current-account"
            >
              {t.headerNavLinks.currentAccount}
            </Link>
            <Link className={styles.burgerLink} href="/business/payments">
              {t.headerNavLinks.payments}
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "270px",
            }}
          >
            <p className={styles.burgerLink}>{t.headerNavLinks.credit}</p>
            <Image
              src="/assets/images/chevronBlack.svg"
              width={14}
              height={8}
              alt="check"
              data-id="credit"
              onClick={(e) => handleShowInnerLinks(e)}
              className={`${showInnerLinks.credit ? "" : styles.rotate}`}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          <div
            className={`${
              showInnerLinks.credit
                ? styles.showInnerLink
                : styles.hideInnerLink
            }`}
          >
            <Link
              className={styles.burgerLink}
              href="/business/investment-loan"
            >
              {t.headerNavLinks.investmentLoan}
            </Link>
            <Link className={styles.burgerLink} href="/business/capital-loan">
              {t.headerNavLinks.capitalLoan}
            </Link>
          </div>

          <Link className={styles.burgerLink} href="/contacts">
            {t.headerNavLinks.contacts}
          </Link>
        </div>
      ) : (
        <div className={styles.burgerBox}>
          <Link className={styles.burgerLink} href="/deposit">
            {t.headerNavLinks.deposit}
          </Link>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "270px",
            }}
          >
            <p className={styles.burgerLink}>{t.headerNavLinks.payments}</p>
            <Image
              src="/assets/images/chevronBlack.svg"
              width={14}
              height={8}
              alt="check"
              data-id="payment"
              onClick={(e) => handleShowInnerLinks(e)}
              className={`${showInnerLinks.payment ? "" : styles.rotate}`}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          <div
            className={`${
              showInnerLinks.payment
                ? styles.showInnerLink
                : styles.hideInnerLink
            }`}
          >
            <Link className={styles.burgerLink} href="/product">
              {t.headerNavLinks.currentAccount}
            </Link>
            <Link className={styles.burgerLink} href="/payments">
              {t.headerNavLinks.payments}
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "270px",
            }}
          >
            <p className={styles.burgerLink}>{t.headerNavLinks.credit}</p>
            <Image
              src="/assets/images/chevronBlack.svg"
              width={14}
              height={8}
              alt="check"
              data-id="credit"
              onClick={(e) => handleShowInnerLinks(e)}
              className={`${showInnerLinks.credit ? "" : styles.rotate}`}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          <div
            className={`${
              showInnerLinks.credit
                ? styles.showInnerLink
                : styles.hideInnerLink
            }`}
          >
            <Link className={styles.burgerLink} href="/credits/mortgage">
              {t.headerNavLinks.mortgageLoan}
            </Link>
            <Link className={styles.burgerLink} href="/credits/consumer-loan">
              {t.headerNavLinks.consumerLoan}
            </Link>
            <Link className={styles.burgerLink} href="/credits/equity-loan">
              {t.headerNavLinks.equityLoan}
            </Link>
          </div>

          <Link className={styles.burgerLink} href="/contacts">
            {t.headerNavLinks.contacts}
          </Link>
        </div>
      )}
      <p
        style={{ width: "40px", fontWeight: "bold" }}
        className="header-nav-link change-language-link"
        onClick={setLanguage}
        href="/eng"
      >
        {langBtnState}
      </p>
    </div>
  );
};

export default React.forwardRef(BurgerMenu);
