import React, { useState } from "react";
import { Alert, Container, Form, Button, FloatingLabel } from "react-bootstrap";
import emailjs from "emailjs-com";
import { BiMailSend } from "react-icons/bi";
import "./style.css";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ia9c26d",
        "template_ihih1lc",
        e.target,
        "user_2oRUwezs6mtA6iAA1WYeS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contactSection" style={{ backgroundColor: "#000000" }}>
      <Container>
        <h2>&#60;Contact&#62;</h2>
        <Container>
          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              <Alert.Heading>Message Sent!</Alert.Heading>
              <p>Thanks for reaching out to me. I'll be in touch soon!</p>
            </Alert>
          )}
          <Form onSubmit={sendEmail} className="my-4">
            <FloatingLabel
              controlId="floatingInput"
              label="Email Address"
              className="my-3"
            >
              <Form.Control
                type="email"
                placeholder="Email Address"
                name="from_email"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Your Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Your Name"
                name="from_name"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Your Message"
              className="mb-3"
            >
              <Form.Control
                type="textarea"
                rows={4}
                placeholder="Your Message"
                name="message"
              />
            </FloatingLabel>
            <Button
              style={{
                backgroundColor: "#fca311",
                color: "#000000",
                borderColor: "#fca311",
              }}
              type="submit"
              className="mb-3 send-button"
            >
              <BiMailSend />
              {"  "} Send
            </Button>
          </Form>
        </Container>
        <h2>&#60;/Contact&#62;</h2>
      </Container>
    </section>
  );
};

export default Contact;
