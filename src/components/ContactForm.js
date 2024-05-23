import { useState } from "react";
import styles from "@/styles/ContactForm.module.scss";
import { useTranslation } from "next-i18next";
import axios from "axios";

function ContactForm(props) {
  const { t } = useTranslation("common");

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    topic: "",
    feedback: "",
    name: "",
    email: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        topic: "",
        feedback: "",
        name: "",
        email: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://submit-form.com/IOB5fxre0",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
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
            value={inputs.name}
            placeholder={t("contactForm.namePlaceholder")}
            onChange={handleOnChange}
          />
          <input
            id="email"
            name="email"
            type="email"
            value={inputs.email}
            placeholder={t("contactForm.emailPlaceholder")}
            onChange={handleOnChange}
          />
        </div>
        {/* <div className="containedBtn">{t("contactForm.button")}</div> */}
        <button
          className="containedBtn"
          type="submit"
          disabled={status.submitting}
        >
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
