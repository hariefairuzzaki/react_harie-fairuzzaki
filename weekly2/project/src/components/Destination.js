import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Madrid from "../assets/img/destination/madrid.png";
import Firenze from "../assets/img/destination/firenze.png";
import Paris from "../assets/img/destination/paris.png";
import London from "../assets/img/destination/london.png";
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

export default function Destination() {
  return (
    <section id="destination">
      <Container>
        <div className="mb-5 text-center">
          <h1 className="display-4 fw-bold">
            Exclusive <span style={{ color: "#fa7436" }}>deals &amp; discounts</span>
          </h1>
          <p className="mt-3 fs-5 text-black-50">
            Discover our fantastic early booking discounts <br /> &amp; start planning your journey.
          </p>
        </div>

        <Row className="mx-xl-5 gy-5">
          <Col xl={3} lg={3} md={6} sm={6}>
            <Card className="border-0 shadow mx-lg-auto ms-md-auto mx-auto" style={{ width: "14rem" }}>
              <Card.Img variant="top" src={Madrid} alt="..." />
              <Card.Body>
                <Card.Title>
                  <Row>
                    <Col>Madrid</Col>
                    <Col className="text-end">
                      <FaStar style={{ color: "#FFC107", marginBottom: "5px" }} /> 4.8
                    </Col>
                  </Row>
                </Card.Title>
                <Card.Text>
                  <Row>
                    <Col className="text-black-50">
                      <FaMapMarkerAlt /> Spain
                    </Col>
                    <Col className="text-end">
                      <div style={{ color: "#fa7436" }}>$ 850</div>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={3} lg={3} md={6} sm={6}>
            <Card className="border-0 shadow mx-lg-auto me-md-auto mx-auto" style={{ width: "14rem" }}>
              <Card.Img variant="top" src={Firenze} alt="..." />
              <Card.Body>
                <Card.Title>
                  <Row>
                    <Col>Firenze</Col>
                    <Col className="text-end">
                      <FaStar style={{ color: "#FFC107", marginBottom: "5px" }} /> 4.5
                    </Col>
                  </Row>
                </Card.Title>
                <Card.Text>
                  <Row>
                    <Col className="text-black-50">
                      <FaMapMarkerAlt /> Italy
                    </Col>
                    <Col className="text-end">
                      <div style={{ color: "#fa7436" }}>$ 750</div>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={3} lg={3} md={6} sm={6}>
            <Card className="border-0 shadow mx-lg-auto ms-md-auto mx-auto" style={{ width: "14rem" }}>
              <Card.Img variant="top" src={Paris} alt="..." />
              <Card.Body>
                <Card.Title>
                  <Row>
                    <Col>Paris</Col>
                    <Col className="text-end">
                      <FaStar style={{ color: "#FFC107", marginBottom: "5px" }} /> 4.4
                    </Col>
                  </Row>
                </Card.Title>
                <Card.Text>
                  <Row>
                    <Col className="text-black-50">
                      <FaMapMarkerAlt /> France
                    </Col>
                    <Col className="text-end">
                      <div style={{ color: "#fa7436" }}>$ 599</div>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={3} lg={3} md={6} sm={6}>
            <Card className="border-0 shadow mx-lg-auto me-md-auto mx-auto" style={{ width: "14rem" }}>
              <Card.Img variant="top" src={London} alt="..." />
              <Card.Body>
                <Card.Title>
                  <Row>
                    <Col>London</Col>
                    <Col className="text-end">
                      <FaStar style={{ color: "#FFC107", marginBottom: "5px" }} /> 4.8
                    </Col>
                  </Row>
                </Card.Title>
                <Card.Text>
                  <Row>
                    <Col className="text-black-50">
                      <FaMapMarkerAlt /> UK
                    </Col>
                    <Col className="text-end">
                      <div style={{ color: "#fa7436" }}>$ 850</div>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button variant="success">
            View All <FaCaretRight />
          </Button>
        </div>
      </Container>
    </section>
  );
}
