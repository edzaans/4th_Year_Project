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
              <div className={Styles.overlay}>
                {" "}
                <h3>WE HELP YOU TO REALISE YOUR BUSINESS GOALS</h3>
                <p>
                  Some text .....Some text .....Some text .....Some text
                  .....Some text .....
                </p>
              </div>
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
              <div className={Styles.overlay}>
                {" "}
                <h3>WE HELP YOU TO REALISE YOUR BUSINESS GOALS</h3>
                <p>
                  Some text .....Some text .....Some text .....Some text
                  .....Some text .....
                </p>
              </div>
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
              <div className={Styles.overlay}>
                {" "}
                <h3>WE HELP YOU TO REALISE YOUR BUSINESS GOALS</h3>
                <p>
                  Some text .....Some text .....Some text .....Some text
                  .....Some text .....
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
