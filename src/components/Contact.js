import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../imag/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formInitialDetails = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const form = useRef();

    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // **التحقق من صحة الحقول قبل الإرسال**
        if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.phone || !formDetails.message) {
            setStatus({ success: false, message: "Please fill out the required fields first !🧐 "});
            return;
        }

        setButtonText("Sending...");

        emailjs
          .sendForm('service_tvle2tg', 'template_j1qnafe', form.current, {
            publicKey: 'o6XSjTYTj3sU-tkhJ',
          })
          .then(
            () => {
              setStatus({ success: true, message: 'Message sent successfully! ❤️' });
              setFormDetails(formInitialDetails);
            },
            (error) => {
              setStatus({ success: false, message: 'Something went wrong 😓, please try again later!' });
            }
          )
          .finally(() => {
            setButtonText("Send");
          });
    };

    return (
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                }
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" name="form_name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" name="form_name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" name="from_email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." name="phone" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" name="message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                  {
                    status.message &&
                    <Col>
                      <p className={status.success ? "success" : "danger"}>{status.message}</p>
                    </Col>
                  }
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default Contact;
