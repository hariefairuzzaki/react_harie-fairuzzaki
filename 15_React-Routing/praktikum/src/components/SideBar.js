import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./SideBar.module.css";

export default function SideBar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="mt-3">
        <Navbar expand="xxl">
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
          <Offcanvas className={styles.offcanvas} id="basic-navbar-nav" show={show} onHide={handleClose}>
            <Offcanvas.Header className="btn-close-white mt-2" closeButton />
            <Offcanvas.Body>
              <Nav>
                <Nav.Item className="mb-2">
                  <Link to="/">Home</Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                  <Link to={props.link1}>{props.item1}</Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                  <Link to={props.link2}>{props.item2}</Link>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar>
      </div>
    </>
  );
}
