import React from "react";
import { Carousel, Image } from "react-bootstrap";
import Styles from "../Styles/Slide.module.css";

// All assets have to be imported from folder
const truck = require("../Assets/truck.jpg");
const van = require("../Assets/van.jpg");
const warehouse = require("../Assets/warehouse.jpg");

export class Slide extends React.Component {
  render() {
    return (
      <div>
        <Carousel fade>
          <Carousel.Item>
            <Image
              className={Styles.photo}
              src={truck.default}
              alt="First slide"
              fluid
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className={Styles.photo}
              src={van.default}
              alt="First slide"
              fluid
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className={Styles.photo}
              src={warehouse.default}
              alt="First slide"
              fluid
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        v
      </div>
    );
  }
}
