import React from "react";
import Slider from "react-slick";
import styles from "@/styles/IndexHeroSlider.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import lt from "@/locales/lt";
import en from "@/locales/en";
import Image from "next/image";
import SliderMobile from "../../public/assets/images/slider_mobile.png";
import SliderMobile2 from "../../public/assets/images/investmentLoan_Hero_mobile.png";
import SliderMobile3 from "../../public/assets/images/slider3_mobile.png";

export default function SimpleSlider() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

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
            <h1>{t.indexPage.slideOne.heroBlockH1}</h1>
            <p>{t.indexPage.slideOne.heroBlockText}</p>
            <div className="action-button-block">
              <Link className="outlinedBtn" href="/deposits">
                {t.indexPage.slideOne.learnMoreButton}
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
            <h1>{t.indexPage.slideTwo.heroBlockH1}</h1>
            <p>{t.indexPage.slideTwo.heroBlockText}</p>
            <div className="action-button-block">
              <Link
                className="outlinedBtn long blue noBorder"
                href="/business/investment-loan"
              >
                {t.indexPage.slideTwo.learnMoreButton}
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
            <h1>{t.indexPage.slideThree.heroBlockH1}</h1>
            <p>{t.indexPage.slideThree.heroBlockText}</p>
            <div className="action-button-block">
              <Link className="outlinedBtn" href="/credits/equity-loan">
                {t.indexPage.slideThree.learnMoreButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
