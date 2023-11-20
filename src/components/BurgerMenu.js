import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/BurgerMenu.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const BurgerMenu = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const isBusiness = router.pathname.includes("/business");
  const [showInnerLinks, setShowInnerLinks] = useState({
    payment: false,
    credit: false,
  });

  const handleShowInnerLinks = (e) => {
    const key = e.target.dataset.id;
    setShowInnerLinks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.closeBtn}>
        <Image
          src="/assets/images/close.svg"
          width={15}
          height={15}
          alt="check"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className={styles.openAcc}>
        <Link href="/open-account" className={styles.upperCaseLink}>
          {t("headerNavLinks.openAccount")}
        </Link>
      </div>
      <div className={styles.burgerHeader}>
        {isBusiness ? (
          <Link className={styles.upperCaseLink} href="/">
            {t("headerNavLinks.private")}
          </Link>
        ) : (
          <Link className={styles.upperCaseLink} href="/business">
            {t("headerNavLinks.business")}
          </Link>
        )}
      </div>
      {isBusiness ? (
        <div className={styles.burgerBox}>
          <Link className={styles.lowerCaseLink} href="/business/deposits">
            {t("headerNavLinks.deposit")}
          </Link>
          <div
            className={styles.burgerItem}
            data-id="payment"
            onClick={(e) => handleShowInnerLinks(e)}
          >
            <h4 className={styles.upperCaseLink} data-id="payment">
              {t("headerNavLinks.payments")}
            </h4>
            <Image
              src="/assets/images/chevronBlack.svg"
              width={14}
              height={8}
              alt="check"
              data-id="payment"
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
              className={styles.lowerCaseLink}
              href="/business/current-account"
            >
              {t("headerNavLinks.currentAccount")}
            </Link>
            <Link className={styles.lowerCaseLink} href="/business/payments">
              {t("headerNavLinks.payments")}
            </Link>
          </div>
          <div
            className={styles.burgerItem}
            data-id="credit"
            onClick={(e) => handleShowInnerLinks(e)}
          >
            <h4 className={styles.upperCaseLink} data-id="credit">
              {t("headerNavLinks.credit")}
            </h4>
            <Image
              src="/assets/images/chevronBlack.svg"
              width={14}
              height={8}
              alt="check"
              data-id="credit"
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
              className={styles.lowerCaseLink}
              href="/business/investment-loan"
            >
              {t("headerNavLinks.investmentLoan")}
            </Link>
            <Link
              className={styles.lowerCaseLink}
              href="/business/capital-loan"
            >
              {t("headerNavLinks.capitalLoan")}
            </Link>
          </div>

          <Link className={styles.lowerCaseLink} href="/contacts">
            {t("headerNavLinks.contacts")}
          </Link>
        </div>
      ) : (
        <div className={styles.burgerBox}>
          <Link className={styles.lowerCaseLink} href="/deposits">
            {t("headerNavLinks.deposit")}
          </Link>

          <div
            className={styles.burgerItem}
            data-id="payment"
            onClick={(e) => handleShowInnerLinks(e)}
          >
            <h4 className={styles.upperCaseLink} data-id="payment">
              {t("headerNavLinks.payments")}
            </h4>
            <Image
              src="/assets/images/chevronBlack.svg"
              width={14}
              height={8}
              alt="check"
              data-id="payment"
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
            <Link className={styles.lowerCaseLink} href="/current-account">
              {t("headerNavLinks.currentAccount")}
            </Link>
            <Link className={styles.lowerCaseLink} href="/payments">
              {t("headerNavLinks.payments")}
            </Link>
          </div>

          <div
            className={styles.burgerItem}
            data-id="credit"
            onClick={(e) => handleShowInnerLinks(e)}
          >
            <h4 className={styles.upperCaseLink} data-id="credit">
              {t("headerNavLinks.credit")}
            </h4>
            <Image
              src="/assets/images/chevronBlack.svg"
              width={14}
              height={8}
              alt="check"
              data-id="credit"
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
            <Link className={styles.lowerCaseLink} href="/credits/mortgage">
              {t("headerNavLinks.mortgageLoan")}
            </Link>
            <Link
              className={styles.lowerCaseLink}
              href="/credits/consumer-loan"
            >
              {t("headerNavLinks.consumerLoan")}
            </Link>
            <Link className={styles.lowerCaseLink} href="/credits/equity-loan">
              {t("headerNavLinks.equityLoan")}
            </Link>
          </div>

          <Link className={styles.lowerCaseLink} href="/contacts">
            {t("headerNavLinks.contacts")}
          </Link>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
