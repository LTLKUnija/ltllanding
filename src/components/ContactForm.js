import { useState, useEffect } from "react";
import styles from "@/styles/ContactForm.module.scss";
import { useTranslation } from "next-i18next";
import axios from "axios";

function ContactForm(props) {
  const { t } = useTranslation("common");

  const [finishedCaptcha, setFinishedCaptcha] = useState(false);

  const [inputs, setInputs] = useState({
    topic: "",
    feedback: "",
    name: "",
    email: "",
  });

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://submit-form.com/IOB5fxre0", {
        topic: inputs.topic,
        feedback: inputs.feedback,
        name: inputs.name,
        email: inputs.email,

        "g-recaptcha-response": grecaptcha.getResponse(),
      })
      .then(function (response) {
        window.location.reload();
      })
      .catch(function (response) {
        console.error(response);
      });
  };

  const captchaCompleted = () => {
    setFinishedCaptcha(true);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.captchaCompleted = captchaCompleted;
  }, []);

  return (
    <div>
      <div className={styles.formTitleBlock}>
        {props?.formTitle && (
          <div>
            <h3>{t("contactForm.title")}</h3>
            {/* <p>{t("contactForm.description")}</p> */}
          </div>
        )}
        <form className={styles.formBlock} onSubmit={handleOnSubmit}>
          <div className={styles.formInputBlock}>
            <input
              id="topic"
              name="topic"
              type="text"
              onChange={handleOnChange}
              required
              placeholder={t("contactForm.topicPlaceholder")}
              value={inputs.topic}
            />
            <textarea
              id="feedback"
              name="feedback"
              required
              type="text"
              value={inputs.feedback}
              placeholder={t("contactForm.feedbackPlaceholder")}
              className={styles.feedbackInput}
              onChange={handleOnChange}
            />
            <input
              id="name"
              name="name"
              type="text"
              required
              value={inputs.name}
              placeholder={t("contactForm.namePlaceholder")}
              onChange={handleOnChange}
            />
            <input
              id="email"
              name="email"
              type="email"
              value={inputs.email}
              required
              placeholder={t("contactForm.emailPlaceholder")}
              onChange={handleOnChange}
            />
          </div>
          <div
            style={{
              marginBottom: "30px",
            }}
            className="g-recaptcha"
            data-callback="captchaCompleted"
            data-sitekey="6LfxFv4pAAAAAA0JxUq4Ho4nh7_9ipPgTUzsN2Bu"
          />
          <button
            className="containedBtn"
            type="submit"
            disabled={!finishedCaptcha}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
