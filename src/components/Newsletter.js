import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@") && onValidated) {
      onValidated({ EMAIL: email });
    }
  };
  const clearFields = () => {
    setEmail('');
  };
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3> See my current projects and subscribe to my newsletter <br />& never miss the latest updates </h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && message && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && message && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
