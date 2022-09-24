import React from "react";
import { Container } from "react-bootstrap";
import SideBar from "../../components/SideBar";

export default function AboutApp() {
  return (
    <div>
      <Container>
        <SideBar link1="/about/about-app" item1="About App" link2="/about/about-author" item2="About Author" />
        <div style={{ width: "700px", margin: "auto" }}>
          <h1>About the App</h1>
          <p>
            In this app, you can add, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload,
            close your app or reopened it, you still have access to your todos items
          </p>
        </div>
      </Container>
    </div>
  );
}
