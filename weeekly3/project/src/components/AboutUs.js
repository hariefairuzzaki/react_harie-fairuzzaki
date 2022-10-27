import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { retrievedUser } from "../store/features/usersSlice";

export default function AboutUs() {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    dispatch(retrievedUser());
  }, [dispatch]);

  return (
    <section id="about-us" style={{ backgroundColor: "#f7f8fc" }}>
      <Container>
        <Row style={{ padding: "80px 0px 80px" }}>
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
            <Carousel className="shadow" activeIndex={index} onSelect={handleSelect}>
              {user.data.user?.map((item) => (
                <Carousel.Item key={item.id}>
                  <Card className="py-3 px-5 border-0">
                    <Card.Body>
                      <Card.Img className="rounded-circle" style={{ width: "70px" }} src={item.avatar} alt="Mike" />
                      <Card.Text className="my-4">“{item.comment}”</Card.Text>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.address}</Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
