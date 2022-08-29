import React, { useState } from "react";
import {
  Carousel,
  Card,
  Container,
  Row,
  Col,
  ContainerFluid,
} from "react-bootstrap";
import image1 from "../../images/image1.png";
import image2 from "../../images/iPhone13.png";
import CarouselO from "./CarouselO";
import CarouselT from "./CarouselT";
import CarouselTh from "./CarouselTh";

function Carousells() {
  return (
    <>
      <div>
        <Carousel
          style={{
            marginBottom: "100px",
          }}
        >
          <Carousel.Item>
            <Container>
              <Row className="justify-content-space-around">
                <CarouselO />
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item>
            <Container>
              <Row>
                <CarouselT />
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <CarouselTh />
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Carousells;
