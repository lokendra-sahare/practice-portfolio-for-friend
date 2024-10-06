import { useEffect, useState } from "react";
import { Alert, Row, Col, Container } from "react-bootstrap";

export const Newsletter = ({ onValidate, status, message }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.prevenDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidate({
        EMAIL: email,
      });
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} sm={5}>
            <h3>Subscribe to our Newsletter</h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
