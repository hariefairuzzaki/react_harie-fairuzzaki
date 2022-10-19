import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { retrievedDestination } from "../store/features/destinationSlice";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

export default function Destination() {
  const dispatch = useDispatch();
  const destination = useSelector((state) => state.destination);

  useEffect(() => {
    dispatch(retrievedDestination());
  }, [dispatch]);

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
          {destination.data.destination?.map((item) => (
            <Col key={item.id} xl={3} lg={3} md={6} sm={6}>
              <Link to={`/detail/${item.id}`} style={{ textDecoration: "none", color: "black" }}>
                <Card className="border-0 shadow mx-auto" style={{ width: "14rem" }}>
                  <Card.Img variant="top" src={item.image_url} alt="..." />
                  <Card.Body>
                    <Card.Title>
                      <Row>
                        <Col>{item.city}</Col>
                        <Col className="text-end">
                          <FaStar style={{ color: "#FFC107", marginBottom: "5px" }} /> {item.rate}
                        </Col>
                      </Row>
                    </Card.Title>
                    <Card.Text>
                      <Row>
                        <Col className="text-black-50">
                          <FaMapMarkerAlt /> {item.country}
                        </Col>
                        <Col className="text-end">
                          <div style={{ color: "#fa7436" }}>{item.price}</div>
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <Button variant="success">
            View All <FaCaretRight />
          </Button>
        </div>
      </Container>
    </section>
  );
}
