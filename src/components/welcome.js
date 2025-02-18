import React from "react";
import { Container, Button } from "react-bootstrap";
import PeacefulClouds from "../assets/PeacefullClouds.jpg";

const Welcome = () => {
  return (
    <div
      className="welcome-section text-center text-white d-flex align-items-center justify-content-center"
      style={{
        background: `linear-gradient(rgba(0, 0, 50, 0.5), rgba(0, 0, 50, 0.5)), url(${PeacefulClouds})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
      }}
    >
      <Container>
        <h1 className="fw-bold">Remember & Honor</h1>
        <p className="lead">
          Preserve the legacy of your loved ones by sharing their stories, photos, and memories.
        </p>
        <Button variant="light" href="/memorials" className="fw-bold">
          View Memorials
        </Button>
      </Container>
    </div>
  );
};

export default Welcome;
