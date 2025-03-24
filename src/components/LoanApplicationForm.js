import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/loanRequestCalculator.module.scss";
import { useTranslation } from "next-i18next";
import { loanFormDataMaker } from "@/utils/helpers";

const LoanApplicationForm = ({ type }) => {
  const { t } = useTranslation("common");

  const captchaRef = useRef(null);
  const isBusiness = type === "business";

  const [inputs, setInputs] = useState({
    loanAmount: 5000,
    loanTerm: 3,
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [submissionDisabled, setSubmissionDisabled] = useState(false);
  const [showHiddenArea, setShowHiddenArea] = useState(false);
  const [showThankyouBanner, setShowThankyouBanner] = useState(false);

  const handleSubmit = async (e) => {
    const form = e.target;
    e.preventDefault();

    if (!showHiddenArea) {
      setShowHiddenArea(true);
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!captchaVerified) {
      setShowCaptcha(true);
      setSubmissionDisabled(true);
      return;
    }

    const formData = loanFormDataMaker(inputs);

    try {
      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScp7ZpRW7OgeVPTwVtCkjg44IKbBO8MmKBQn8pIB0x2xKVL1w/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      setInputs({
        loanAmount: 5000,
        loanTerm: 3,
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
      });

      setShowHiddenArea(false);
      setShowThankyouBanner(true);
    } catch (error) {
      console.error("Error submitting the form: ", error);
      alert("Error submitting the form. Please try again.");
    }
  };

  const handleThankYouOk = () => {
    setShowHiddenArea(false);
    setShowThankyouBanner(false);
    setInputs({
      loanAmount: 5000,
      loanTerm: 3,
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      phoneNumber: "",
    });
  };

  useEffect(() => {
    if (!window.grecaptcha) {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    window.hello = () => {
      if (window.grecaptcha.getResponse()) {
        setCaptchaVerified(true);
        setSubmissionDisabled(false);
      }
    };

    return () => {
      window.hello = undefined;
    };
  }, []);

  useEffect(() => {
    if (showCaptcha && !captchaRef.current) {
      setTimeout(() => {
        if (window.grecaptcha && document.getElementById("g-recaptcha")) {
          captchaRef.current = window.grecaptcha.render("g-recaptcha");
        }
      }, 100);
    }
  }, [showCaptcha]);

  useEffect(() => {
    if (inputs.loanAmount !== 5000 || inputs.loanTerm !== 3) {
      setShowHiddenArea(true);
    }
  }, [inputs.loanAmount, inputs.loanTerm]);

  return (
    <form className={styles.loanAplicationForm} onSubmit={handleSubmit}>
      {!showThankyouBanner && <h2>{t("common.loanFormTitle")}</h2>}
      {!showThankyouBanner && <h4>{t("common.loanFormSubtitle")}</h4>}

      <div
        className={
          showThankyouBanner
            ? styles.inputBlocksWrapperParentExtra
            : styles.inputBlocksWrapperParent
        }
      >
        <div className={styles.inputsBlock}>
          {!showThankyouBanner && (
            <div className={styles.inputBlocksWrapper}>
              <div className={styles.loanSizeBlock}>
                <div className={styles.loanSizeInputBlock}>
                  <span className={styles.inputLabel}>
                    {t("common.loanAmount")}:
                  </span>
                  <div className={styles.inputWrapper}>
                    <input
                      type="number"
                      min="0"
                      max="3000000"
                      step="1000"
                      value={inputs.loanAmount}
                      required
                      name={process.env.NEXT_PUBLIC_LOANFORM_LOANAMOUNT}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          loanAmount: Number(e.target.value),
                        }))
                      }
                      onBlur={() =>
                        setInputs((prev) => ({
                          ...prev,
                          loanAmount: Math.round(prev.loanAmount / 1000) * 1000,
                        }))
                      }
                    />
                    <div>Eur</div>
                  </div>
                </div>
                <div className={styles.rangeWrapper}>
                  <input
                    type="range"
                    step="1000"
                    min="0"
                    max="3000000"
                    value={inputs.loanAmount}
                    onChange={(e) =>
                      setInputs((prev) => ({
                        ...prev,
                        loanAmount: Number(e.target.value),
                      }))
                    }
                  />
                  <div className={styles.rangeLabels}>
                    <span>5 000</span>
                    <span>3 000 000</span>
                  </div>
                </div>
              </div>

              <div className={styles.loanTermsBlock}>
                <div className={styles.loanSizeInputBlock}>
                  <span className={styles.inputLabel}>
                    {t("common.loanTerm")}:
                  </span>
                  <div className={styles.inputWrapper}>
                    <input
                      type="number"
                      min="3"
                      required
                      max="84"
                      step="1"
                      name={process.env.NEXT_PUBLIC_LOANFORM_LOANTERM}
                      value={inputs.loanTerm}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          loanTerm: Number(e.target.value),
                        }))
                      }
                      onBlur={() =>
                        setInputs((prev) => ({
                          ...prev,
                          loanTerm: Math.min(prev.loanTerm, 84),
                        }))
                      }
                    />
                    <div>{t("common.months")}.</div>
                  </div>
                </div>
                <div className={styles.rangeWrapper}>
                  <input
                    type="range"
                    step="1"
                    min="3"
                    max="84"
                    value={inputs.loanTerm}
                    onChange={(e) =>
                      setInputs((prev) => ({
                        ...prev,
                        loanTerm: Number(e.target.value),
                      }))
                    }
                  />
                  <div className={styles.rangeLabels}>
                    <span>3</span>
                    <span>84</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showThankyouBanner && (
            <div className={styles.thankyouBanner}>
              <span className={styles.thankyouText}>
                {t("common.successLoanFormSend")}
              </span>
              <span
                className={styles.thankyouOkButton}
                onClick={handleThankYouOk}
              >
                OK
              </span>
            </div>
          )}

          {showHiddenArea && (
            <div className={styles.hiddenArea}>
              <div className={styles.detailsBlocksWrapper}>
                <div className={styles.personalDetailsBlock}>
                  <div
                    className={
                      isBusiness ? styles.nameBlock : styles.nameBlockColumn
                    }
                  >
                    <input
                      type="text"
                      className={styles.name}
                      placeholder={t("common.firstname")}
                      name={process.env.NEXT_PUBLIC_LOANFORM_FIRSTNAME}
                      value={inputs.firstName}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                      required
                    />
                    <input
                      type="text"
                      className={styles.lastName}
                      placeholder={t("common.lastname")}
                      name={process.env.NEXT_PUBLIC_LOANFORM_LASTNAME}
                      value={inputs.lastName}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className={styles.emailBlock}>
                    {isBusiness && (
                      <input
                        type="email"
                        className={styles.email}
                        placeholder={t("common.email")}
                        name={process.env.NEXT_PUBLIC_LOANFORM_EMAIL}
                        value={inputs.email}
                        onChange={(e) =>
                          setInputs((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        required
                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                        onInvalid={(e) =>
                          e.target.setCustomValidity(
                            t("common.validEmailErrorMessage")
                          )
                        }
                        onInput={(e) => e.target.setCustomValidity("")}
                      />
                    )}
                  </div>
                </div>

                <div className={styles.corporateDetailsBlock}>
                  {isBusiness && (
                    <input
                      type="text"
                      className={styles.companyName}
                      placeholder={t("common.companyName")}
                      name={process.env.NEXT_PUBLIC_LOANFORM_COMPANYNAME}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          companyName: e.target.value,
                        }))
                      }
                      required
                    />
                  )}

                  {!isBusiness && (
                    <input
                      type="email"
                      className={styles.email}
                      placeholder={t("common.email")}
                      name={process.env.NEXT_PUBLIC_LOANFORM_EMAIL}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      required
                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Введите корректный e-mail")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  )}

                  <input
                    type="text"
                    className={styles.phone}
                    placeholder={t("common.mobilePhone")}
                    name={process.env.NEXT_PUBLIC_LOANFORM_PHONE}
                    value={inputs.phoneNumber}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (value.startsWith("+")) {
                        value = "+" + value.slice(1).replace(/[^\d]/g, "");
                      } else {
                        value = value.replace(/[^\d]/g, "");
                      }
                      setInputs((prev) => ({
                        ...prev,
                        phoneNumber: value,
                      }));
                    }}
                    onBlur={(e) => {
                      const trimmed = e.target.value.trim();
                      setInputs((prev) => ({
                        ...prev,
                        phoneNumber: trimmed,
                      }));
                    }}
                    required
                  />
                </div>
              </div>

              <div className={styles.termsBlock}>
                <input type="checkbox" id={styles.checkbox} required />
                <div className={styles.termsText}>
                  {t("common.loanFormTermsMessage")}{" "}
                  <a href="#">{t("common.loanFormTermsMessageLink")}</a>
                </div>
              </div>
            </div>
          )}
        </div>

        {!showThankyouBanner && (
          <div
            className={
              !showThankyouBanner && !showHiddenArea
                ? styles.actionBlockNoGap
                : styles.actionBlock
            }
          >
            <button
              className={styles.submitButton}
              type="submit"
              disabled={submissionDisabled}
            >
              {t("common.loanFormButton")}
            </button>

            {showCaptcha && (
              <div
                id="g-recaptcha"
                className="g-recaptcha"
                data-sitekey="6LfxFv4pAAAAAA0JxUq4Ho4nh7_9ipPgTUzsN2Bu"
                data-callback="hello"
                data-theme="light"
                style={{
                  transform: "scale(0.77)",
                  transformOrigin: "0 0",
                }}
              ></div>
            )}
          </div>
        )}
      </div>
    </form>
  );
};

export default LoanApplicationForm;
