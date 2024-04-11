import React from "react";
import Slider from "react-slick";
import styles from "@/styles/BusinessIndexSlider.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import SliderMobile from "../../public/assets/images/Business_Hero_mobile.png";
import SliderMobile2 from "../../public/assets/images/investmentLoan_Hero_mobile.png";
import SliderMobile3 from "../../public/assets/images/currentAccount_Hero_mobile.png";

export default function SimpleSlider() {
  const { t } = useTranslation("common");

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function () {
      return (
        <div
          className="index-page-hero-slider-dot"
          style={{
            width: "12px",
            height: "12px",
            backgroundColor: "#E8E8E8",
            borderRadius: "50%",
            position: "relative",
            top: "-110px",
          }}
        ></div>
      );
    },
  };

  return (
    <Slider {...settings} className={styles.indexPageSlider}>
      <div className={styles.slickSlide}>
        <div className="container">
          <div className={styles.slideContent}>
            <Image
              src={SliderMobile}
              alt={"Hero Mobile"}
              style={{ width: 200, height: 190 }}
              className={styles.heroImage}
            />
            <h1>{t("businessIndexPage.slideOne.heroBlockH1")}</h1>
            <p className={styles.description}>
              {t("businessIndexPage.slideOne.heroBlockText")}
            </p>
            <div className="action-button-block">
              <Link className="outlinedBtn blue" href="/business/deposits">
                {t("businessIndexPage.slideOne.learnMoreButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slickSlide2}>
        <div className="container">
          <div className={styles.slideContent}>
            <Image
              src={SliderMobile2}
              alt={"Hero Mobile"}
              style={{ width: 200, height: 190 }}
              className={styles.heroImage}
            />
            <h1>{t("businessIndexPage.slideTwo.heroBlockH1")}</h1>
            <p className={styles.description}>
              {t("businessIndexPage.slideTwo.heroBlockText")}
            </p>
            <div className="action-button-block">
              <Link
                className="outlinedBtn long blue"
                href="/business/investment-loan"
              >
                {t("businessIndexPage.slideTwo.learnMoreButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slickSlide3}>
        <div className="container">
          <div className={styles.slideContent}>
            <Image
              src={SliderMobile3}
              alt={"Hero Mobile"}
              style={{ width: 200, height: 190 }}
              className={styles.heroImage}
            />
            <h1>{t("businessIndexPage.slideThree.heroBlockH1")}</h1>
            <p className={styles.description}>
              {t("businessIndexPage.slideThree.heroBlockText")}
            </p>
            <div className="action-button-block">
              <Link
                className="outlinedBtn blue"
                href="/business/current-account"
              >
                {t("businessIndexPage.slideThree.learnMoreButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
