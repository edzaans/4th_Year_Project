import React from "react";
import Styles from "../Styles/Quote.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { ContactForm } from "./ContactForm";

// Import Icon name to be used ( use as a component in code )
import { FiPackage } from "react-icons/fi";
import { RiTruckLine } from "react-icons/ri";
import { BsDoorOpen } from "react-icons/bs";
import { GiRoad } from "react-icons/gi";

export class Quote extends React.Component {
  render() {
    return (
      <div>
        <Container fluid className={Styles.container}>
          <Row>
            <Col md={12} sm={12}>
              <h2>WHAT WE OFFER</h2>
              <Row>
                <Col md={6}>
                  <div>
                    <span>
                      <FiPackage />
                    </span>
                    <h5>Packaging And Storage</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Praesentium, culpa excepturi amet exercitationem in
                      adipisci! Non beatae ullam dolores, ad voluptas quas. Ad
                      quam molestias neque impedit totam id sunt?
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <span>
                      <RiTruckLine />
                    </span>
                    <h5>Nation Wide Transport</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Praesentium, culpa excepturi amet exercitationem in
                      adipisci! Non beatae ullam dolores, ad voluptas quas. Ad
                      quam molestias neque impedit totam id sunt?
                    </p>
                  </div>
                </Col>
              </Row>

              {/* Second row */}

              <Row>
                <Col md={6}>
                  <div>
                    <span>
                      <BsDoorOpen />
                    </span>
                    <h5>Door To Door Deliveries</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Praesentium, culpa excepturi amet exercitationem in
                      adipisci! Non beatae ullam dolores, ad voluptas quas. Ad
                      quam molestias neque impedit totam id sunt?
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <span>
                      <GiRoad />
                    </span>
                    <h5>Ground Transport</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Praesentium, culpa excepturi amet exercitationem in
                      adipisci! Non beatae ullam dolores, ad voluptas quas. Ad
                      quam molestias neque impedit totam id sunt?
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
