import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser"; // Import emailjs

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({ success: false, message: "" });

  const formRef = useRef(); // Create a reference for the form

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formDetails.firstName || !formDetails.email || !formDetails.message) {
      setStatus({ success: false, message: "All fields are required." });
      return;
    }

    if (!validateEmail(formDetails.email)) {
      setStatus({
        success: false,
        message: "Please enter a valid email address.",
      });
      return;
    }

    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_qvvny2p", // Replace with your EmailJS service ID
        "template_a1x301g", // Replace with your EmailJS template ID
        formRef.current, // Use the ref for form submission
        "dPKhP6LT7UAo_T9K9" // Replace with your public key
      )
      .then(
        () => {
          setButtonText("Send");
          setStatus({ success: true, message: "Message sent successfully!" });
          setFormDetails(formInitialDetails); // Reset form details after success

          // Clear status message after 2 seconds
          setTimeout(() => {
            setStatus({ success: false, message: "" }); // Clear both success and message
          }, 2000);
        },
        (error) => {
          setButtonText("Send");
          setStatus({
            success: false,
            message: "Something went wrong, please try again later.",
          });

          // Clear error message after 2 seconds
          setTimeout(() => {
            setStatus({ success: false, message: "" }); // Clear both success and message
          }, 2000);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={formRef} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          name="name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>

                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          name="email"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          name="message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>

                        {/* Status message appears below the textarea */}
                        {status.message && (
                          <p className={status.success ? "success" : "danger"}>
                            {status.message}
                          </p>
                        )}

                        <div className="text-center">
                          <button type="submit">
                            <span>{buttonText}</span>
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
