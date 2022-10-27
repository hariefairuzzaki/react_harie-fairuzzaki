import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDestinationById } from "../store/features/destinationSlice";
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Detail() {
  const dispatch = useDispatch();
  const destination = useSelector((state) => state.destination.currentData);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDestinationById(id));
  }, [dispatch, id]);

  return (
    <section>
      <Container>
        <Row className="gy-4">
          <Col lg={8}>
            <Card className="border-0 shadow">
              <Card.Body>
                <h1>Description</h1>
                <Card.Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo ab laborum facere ex nisi facilis
                  deserunt error, sapiente modi debitis corrupti praesentium magnam, reprehenderit animi aspernatur
                  nihil, delectus eius excepturi nulla quidem neque maxime quibusdam quis quae? Nam illo dolor,
                  assumenda aperiam, facere ad soluta voluptate fugiat ducimus molestiae at iure inventore unde, nihil
                  nobis. Tempore omnis perspiciatis facilis, quisquam magni maxime in provident qui dolores asperiores
                  quas totam illum praesentium pariatur vero rerum odio? Vel, fugiat. Temporibus at quidem aspernatur.
                  Blanditiis, exercitationem? Veniam dicta amet saepe at consequatur ea, maiores, voluptas, ratione
                  doloremque vel asperiores tempore voluptatum eligendi vero?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            {destination.destination?.map((item) => (
              <Card className="border-0 shadow mx-auto" style={{ width: "18rem" }}>
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
                  <div className="text-center">
                    <Button variant="success">Booking Now</Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
