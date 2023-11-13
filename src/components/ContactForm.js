import styles from "@/styles/ContactForm.module.scss";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "next-i18next";

export const ContactForm = ({ ...props }) => {
  const { t } = useTranslation("common");

  const [state, handleSubmit] = useForm("xqkvjgol");
  if (state.succeeded) {
    return <p>{t("contactForm.joining")}</p>;
  }

  return (
    <div className={styles.formTitleBlock}>
      {props.formTitle && (
        <div>
          <h3>{t("contactForm.title")}</h3>
          <p>{t("contactForm.description")}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className={styles.formBlock}>
        <div className={styles.formInputBlock}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={t("contactForm.topicPlaceholder")}
          />
          <textarea
            placeholder={t("contactForm.feedbackPlaceholder")}
            className={styles.feedbackInput}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <input
            id="message"
            name="message"
            placeholder={t("contactForm.namePlaceholder")}
          />
          <input type="text" placeholder={t("contactForm.emailPlaceholder")} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div type="submit" disabled={state.submitting} className="containedBtn">
          {t("contactForm.button")}
        </div>
      </form>
    </div>
  );
};
