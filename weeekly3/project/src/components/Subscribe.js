import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Subscribe() {
  const data = {
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  };

  const [datas, setDatas] = useState(data);

  const handleInput = (e) => {
    const { name, value } = e.target;

    console.log(value);

    setDatas({
      ...datas,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (datas === "") {
      alert("Something went wrong ...");
    } else {
      alert(`
        Name: ${datas.firstName} ${datas.lastName}
        Email: ${datas.email}
        Comment: ${datas.comment}

        Successfully sent!
      `);
    }

    setDatas(data);
  };

  return (
    <section id="subscribe">
      <Container className="bg-image">
        <Row className="justify-content-center align-items-center p-4">
          <Col lg={6}>
            <h1 className="text-center text-white mb-5">
              Subscribe and get exclusive <br />
              deals &amp; offer
            </h1>
          </Col>

          <Col lg={{ span: 6, offset: 0 }} md={{ span: 10, offset: 2 }}>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="5">
                  <Form.Label className="text-white">First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="firstName"
                    value={datas.firstName}
                    placeholder="First name"
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group as={Col} md="5">
                  <Form.Label className="text-white">Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="lastName"
                    value={datas.lastName}
                    placeholder="Last name"
                    onChange={handleInput}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="10">
                  <Form.Label className="text-white">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={datas.email}
                    placeholder="Email"
                    required
                    onChange={handleInput}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="10">
                  <Form.Label className="text-white">What can we help you with?</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="comment"
                    value={datas.help}
                    placeholder="Leave a comment here"
                    style={{ height: "80px" }}
                    onChange={handleInput}
                  />
                </Form.Group>
              </Row>
              <Button variant="primary" type="submit">
                Submit form
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
