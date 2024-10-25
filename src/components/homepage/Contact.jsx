import React, { useState } from "react";
import styles from "../../pages/Homepage.module.css";
import Spinner from "../UI/Spinner";
import Alert from "../UI/Alert";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [hasEmail, setHasEmail] = useState(false);

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const getEmail = () => {
    navigator.clipboard.writeText("adrian40001@gmail.com");
    setHasEmail(true);
    setTimeout(() => setHasEmail(false), 2000);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setFormStatus({ loading: true, success: false, error: null }); // setting loading status

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        e.target, // form
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY
      )
      .then((res) => {
        if (res.status !== 200)
          throw new Error("Something went wrong, please try again");

        return setFormStatus((prevState) => ({
          ...prevState,
          loading: false,
          success: true,
        })); // message successfully submitted
      })
      .catch((error) => {
        console.log(error.message);
        setFormStatus((prevState) => ({
          ...prevState,
          loading: false,
          success: false,
          error,
        })); // submition failed
      });

    const elements = e.target.querySelectorAll("input, textarea");
    elements.forEach((element) => (element.value = "")); // cleaning input values
  };

  return (
    <section id="contact" className={styles.section}>
      <div id="contact-header" className={styles.sectionHeader}>
        <h2 id="contact-title" className="fs-1">
          Contact
        </h2>
        <p id="contact-subtitle">Let's get in touch!</p>
      </div>
      <div
        id="contact-content"
        className="w-100 d-flex flex-column align-items-center"
      >
        <form className="col-9" onSubmit={submitHandler}>
          <div className="row">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              id="floatingTextarea"
              placeholder="Message"
              name="message"
              style={{ height: "30vh" }}
              required
            ></textarea>
            <label htmlFor="floatingTextarea">Message</label>
          </div>
          <div className="row mt-4 justify-content-between mx-1">
            <button
              className={`btn btn-primary col-md-auto col-lg-5 py-md-3 mb-2 mb-md-0 ${styles.buttonText}`}
              type="submit"
              disabled={formStatus.loading}
            >
              {!formStatus.loading ? (
                <>
                  Send message<i className="bi bi-send-fill ms-3"></i>
                </>
              ) : (
                <div className="d-flex align-items-center justify-content-center">
                  <span className="me-3">Submitting...</span>
                  <Spinner />
                </div>
              )}
            </button>
            <button
              className={`btn btn-secondary col-md-5 py-md-3 ${styles.buttonText}`}
              onClick={getEmail}
              disabled={hasEmail}
            >
              {!hasEmail ? "Get Email" : "Email copied"}
              <i
                className={`bi bi-${
                  !hasEmail ? "envelope-at-fill ms-3" : "check-lg ms-2"
                }`}
              ></i>
            </button>
          </div>
          {formStatus.success && (
            <Alert type="success" message="Message successfully submitted" />
          )}
          {formStatus.error && (
            <Alert
              type="danger"
              message={
                formStatus.error.message ||
                "Looks like an error occurred, please try again"
              }
            />
          )}
        </form>
      </div>
    </section>
  );
}
