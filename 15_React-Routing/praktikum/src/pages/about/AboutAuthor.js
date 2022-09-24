import React from "react";
import { Container } from "react-bootstrap";
import SideBar from "../../components/SideBar";

export default function AboutAuthor() {
  return (
    <div>
      <Container>
        <SideBar link1="/about/about-app" item1="About App" link2="/about/about-author" item2="About Author" />
        <div style={{ width: "700px", margin: "auto" }}>
          <h1>About the Author</h1>
          <p>This app was developed by someone, a self-taught web developer and technical writer.</p>
        </div>
      </Container>
    </div>
  );
}
