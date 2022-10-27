import React from "react";
import SignupCard from "../assets/img/things-you-need/signup-card.svg";
import MoneyCard from "../assets/img/things-you-need/money-card.svg";
import TravelCard from "../assets/img/things-you-need/travel-card.svg";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function ThingsYouNeed() {
  return (
    <section style={{ backgroundColor: "#f7f8fc" }}>
      <Container className="mt-5" style={{ padding: "80px 0px 80px" }}>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">
            Things you need <span style={{ color: "#fa7436" }}>to do</span>
          </h1>
          <p className="fs-5 text-black-50">
            We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.
          </p>
        </div>
        <Row className="gy-4">
          <Col xl={4} lg={4} md={12}>
            <Card className="mx-auto shadow p-4 border-0" style={{ width: "20rem" }}>
              <Card.Img src={SignupCard} className="img-fluid pt-3 ps-3 mb-3" style={{ width: "3rem" }} alt="..." />
              <Card.Body>
                <Card.Title className="fw-bold">Sign Up</Card.Title>
                <Card.Text>Completes all the work associated with planning and processing</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4} lg={4} md={12}>
            <Card className="mx-auto shadow p-4 border-0" style={{ width: "20rem" }}>
              <Card.Img src={MoneyCard} className="img-fluid pt-3 ps-3 mb-3" style={{ width: "3rem" }} alt="..." />
              <Card.Body>
                <Card.Title className="fw-bold">Worth of Money</Card.Title>
                <Card.Text>After successful access then book from exclusive deals &amp; pricing</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4} lg={4} md={12}>
            <Card className="mx-auto shadow p-4 border-0" style={{ width: "20rem" }}>
              <Card.Img src={TravelCard} className="img-fluid pt-3 ps-3 mb-3" style={{ width: "3rem" }} alt="..." />
              <Card.Body>
                <Card.Title className="fw-bold">Exciting Travel</Card.Title>
                <Card.Text>Start and explore a wide range of exciting travel experience.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
