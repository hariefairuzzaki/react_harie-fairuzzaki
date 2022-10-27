import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import HeroImg from "../assets/img/hero-section/hero-img.png";

export default function Hero() {
  return (
    <section>
      <Container>
        <Row className="align-items-center">
          <Col xl={6} lg={12}>
            <h1 className="display-4 fw-bold">
              Get started your exciting <span style={{ color: "#fa7436" }}>journey</span> with us.
            </h1>
            <p className="fs-5 text-black-50 fw-semibold my-5">
              A Team of experienced tourism professionals will provide you with the best advice and tips for your desire
              place.
            </p>
            <Button variant="outline-success">Discover Now</Button>
          </Col>
          <Col xl={6} lg={12}>
            <img className="mx-auto d-none d-md-block" src={HeroImg} width="650px" alt="img hero" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
