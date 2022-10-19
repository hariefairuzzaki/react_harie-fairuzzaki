import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Logo from "../assets/img/logo/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <section id="footer">
      <Container>
        <Row className="gy-sm-4 gy-4">
          <Col xl={6} lg={6} md={4} sm={12}>
            <img src={Logo} alt="Logo" />
            <p className="mt-3">
              Book your trip in minute, get full <br /> Control for much longer.
            </p>
            <div>
              <a
                href="#foo"
                className="btn btn-success rounded-circle p-2 m-2"
                style={{ border: "none", width: "40px" }}
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/hariefairuz/"
                className="btn btn-success rounded-circle p-2 m-2"
                style={{ border: "none", width: "40px" }}
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="#foo"
                className="btn btn-success rounded-circle p-2 m-2"
                style={{ border: "none", width: "40px" }}
              >
                <FaTwitter className="text-white" />
              </a>
            </div>
          </Col>
          <Col xl={2} lg={2} md={3} sm={12}>
            <p className="fw-bold">Company</p>
            <ul className="list-group" style={{ listStyleType: "none" }}>
              <li>
                <a href="#foo">About</a>
              </li>
              <li>
                <a href="#foo">Carrers</a>
              </li>
              <li>
                <a href="#foo">Logistic</a>
              </li>
              <li>
                <a href="#foo">Privacy &amp; Policy</a>
              </li>
            </ul>
          </Col>
          <Col xl={2} lg={2} md={2} sm={12}>
            <p className="fw-bold">More</p>
            <ul className="list-group" style={{ listStyleType: "none" }}>
              <li>
                <a href="#foo">Press centre</a>
              </li>
              <li>
                <a href="#foo">Our Blogs</a>
              </li>
              <li>
                <a href="#foo">Low fare tips</a>
              </li>
            </ul>
          </Col>
          <Col xl={2} lg={2} md={3} sm={12}>
            <p className="fw-bold">Come Say Hello!</p>
            <p>Dipatiukur, Kota Bandung, Jawa barat</p>
            <p>(+62) 859-2899-3274</p>
            <Button variant="success">
              Contact Us <FaPaperPlane className="ms-2 mb-1" />
            </Button>
          </Col>
        </Row>
      </Container>
      <hr />
      <div className="text-center mt-3">
        <p>&copy; Copyright, Trabook 2022. All rights reserved.</p>
      </div>
    </section>
  );
}
