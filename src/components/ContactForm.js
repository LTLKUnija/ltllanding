import styles from "@/styles/ContactForm.module.scss";
import { useTranslation } from 'next-i18next';

function ContactForm(props) {
  const {t} = useTranslation('common');

  return (
    <div className={styles.formTitleBlock}>
      {props.formTitle && (
        <div>
          <h3>{t('contactForm.title')}</h3>
          <p>{t('contactForm.description')}</p>
        </div>
      )}
      <form className={styles.formBlock}>
        <div className={styles.formInputBlock}>
          <input type="text" placeholder={t('contactForm.topicPlaceholder')} />
          <textarea
            placeholder={t('contactForm.feedbackPlaceholder')}
            className={styles.feedbackInput}
          />
          <input type="text" placeholder={t('contactForm.namePlaceholder')} />
          <input type="text" placeholder={t('contactForm.emailPlaceholder')} />
        </div>
        <div className="containedBtn">{t('contactForm.button')}</div>
      </form>
    </div>
  );
}

export default ContactForm;
