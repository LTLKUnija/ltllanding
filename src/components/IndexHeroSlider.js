import React from "react";
import Slider from "react-slick";
import styles from "@/styles/IndexHeroSlider.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import lt from "@/locales/lt";
import en from "@/locales/en";

export default function SimpleSlider() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 4500,
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
            <h1>{t.indexPage.slideOne.heroBlockH1}</h1>
            <p>{t.indexPage.slideOne.heroBlockText}</p>
            <div className="action-button-block">
              <Link className="light-green-action-button" href="/">
                {t.indexPage.slideOne.learnMoreButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slickSlide2}>
        <div className="container">
          <div className={styles.slideContent}>
            <h1>{t.indexPage.slideOne.heroBlockH1}</h1>
            <p>{t.indexPage.slideOne.heroBlockText}</p>
            <div className="action-button-block">
              <Link className="light-green-action-button" href="/">
                {t.indexPage.slideOne.learnMoreButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slickSlide}>
        <div className="container">
          <div className={styles.slideContent}>
            <h1>{t.indexPage.slideOne.heroBlockH1}</h1>
            <p>{t.indexPage.slideOne.heroBlockText}</p>
            <div className="action-button-block">
              <Link className="light-green-action-button" href="/">
                {t.indexPage.slideOne.learnMoreButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
