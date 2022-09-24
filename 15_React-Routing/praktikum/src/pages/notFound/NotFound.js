import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Container className="text-center mt-5">
        <p style={{ fontSize: "100px" }}>404</p>
        <p>Oops! Something went wrong!</p>
        <Button onClick={handleClick}>Return to Home</Button>
      </Container>
    </div>
  );
}
