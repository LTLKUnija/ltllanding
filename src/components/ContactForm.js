import styles from "@/styles/ContactForm.module.scss";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";

function ContactForm(props) {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  return (
    <div className={styles.formTitleBlock}>
      {props.formTitle && (
        <div>
          <h3>{t.contactForm.title}</h3>
          <p>{t.contactForm.description}</p>
        </div>
      )}
      <form className={styles.formBlock}>
        <div className={styles.formInputBlock}>
          <input type="text" placeholder={t.contactForm.topicPlaceholder} />
          <textarea
            placeholder={t.contactForm.feedbackPlaceholder}
            className={styles.feedbackInput}
          />
          <input type="text" placeholder={t.contactForm.namePlaceholder} />
          <input type="text" placeholder={t.contactForm.emailPlaceholder} />
        </div>
        <div className="containedBtn">{t.contactForm.button}</div>
      </form>
    </div>
  );
}

export default ContactForm;
