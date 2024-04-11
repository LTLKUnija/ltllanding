import React from "react";
import Slider from "react-slick";
import styles from "@/styles/IndexHeroSlider.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import SliderMobile from "../../public/assets/images/slider1_mobile.png";
import SliderMobile2 from "../../public/assets/images/mortgageLoan_Hero_mobile.png";
import SliderMobile3 from "../../public/assets/images/product_Hero_mobile.png";

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
            backgroundColor: "#fff",
            borderRadius: "50%",
            position: "relative",
            top: "-70px",
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
            <h1>{t("indexPage.slideOne.heroBlockH1")}</h1>
            <p className={styles.description}>
              {t("indexPage.slideOne.heroBlockText")}
            </p>
            <div className="action-button-block">
              <Link className="outlinedBtn" href="/deposits">
                {t("indexPage.slideOne.learnMoreButton")}
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
            <h1>{t("indexPage.slideTwo.heroBlockH1")}</h1>
            <p className={styles.description}>
              {t("indexPage.slideTwo.heroBlockText")}
            </p>
            <div className="action-button-block">
              <Link className="outlinedBtn long" href="/credits/mortgage">
                {t("indexPage.slideTwo.learnMoreButton")}
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
            <h1>{t("indexPage.slideThree.heroBlockH1")}</h1>
            <p className={styles.description}>
              {t("indexPage.slideThree.heroBlockText")}
            </p>
            <div className="action-button-block">
              <Link className="outlinedBtn" href="/current-account">
                {t("indexPage.slideThree.learnMoreButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
