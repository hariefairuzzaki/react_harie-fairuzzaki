import React, { useState } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import Mike from "../assets/img/about/mike.svg";

export default function AboutUs() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="about-us" style={{ backgroundColor: "#f7f8fc" }}>
      <Container>
        <Row className="gy-4" style={{ padding: "80px 0px 80px" }}>
          <Col lg={6}>
            <h1 className="display-4 fw-bold mb-4">
              What people say <br />
              <span style={{ color: "#fa7436" }}>about us.</span>
            </h1>
            <p className="fs-5 fw-semibold text-black-50">
              Our Clients send us bunch of smilies with our services <br />
              and we love them.
            </p>
          </Col>

          <Col lg={6}>
            <Carousel className="shadow rounded-4" activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <Card className="py-3 px-5 border-0">
                  <Card.Body>
                    <img src={Mike} alt="Mike" />
                    <Card.Text className="my-4">
                      “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as
                      knew next. Of believed or diverted no.”
                    </Card.Text>
                    <Card.Title>Mike taylor</Card.Title>
                    <Card.Text>Lahore, Pakistan</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item>
                <Card className="py-3 px-5 border-0">
                  <Card.Body>
                    <img src={Mike} alt="Mike" />
                    <Card.Text className="my-4">
                      “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as
                      knew next. Of believed or diverted no.”
                    </Card.Text>
                    <Card.Title>Mike taylor</Card.Title>
                    <Card.Text>Lahore, Pakistan</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
