import React from "react";
import Styles from "../Styles/Quote.module.css";
import { Container, Row, Col } from "react-bootstrap";

// Import Icon name to be used ( use as a component in code )
import { FiPackage } from "react-icons/fi";
import { RiTruckLine } from "react-icons/ri";
import { BsDoorOpen } from "react-icons/bs";
import { GiRoad } from "react-icons/gi";

export class Quote extends React.Component {
  render() {
    return (
      <div>
        <Container fluid className={Styles.quote_container}>
          <Row>
            <Col md={12} sm={12}>
              <h2>WHAT WE OFFER</h2>
              <Row className="my-5">
                <Col md={6} className={Styles.quote_col}>
                  <div>
                    <span>
                      <FiPackage className={Styles.quote_icon} />
                    </span>
                    <h4>Packaging And Storage</h4>
                    <p className={Styles.quote_p}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Praesentium, culpa excepturi amet exercitationem in
                      adipisci! Non beatae ullam dolores, ad voluptas quas. Ad
                      quam molestias neque impedit totam id sunt?
                    </p>
                  </div>
                </Col>
                <Col md={6} className={Styles.quote_col}>
                  <div>
                    <span>
                      <RiTruckLine className={Styles.quote_icon} />
                    </span>
                    <h4>Nation Wide Transport</h4>
                    <p className={Styles.quote_p}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Praesentium, culpa excepturi amet exercitationem in
                      adipisci! Non beatae ullam dolores, ad voluptas quas. Ad
                      quam molestias neque impedit totam id sunt?
                    </p>
                  </div>
                </Col>
              </Row>

              {/* Second row */}

              <Row className="my-5">
                <Col md={6} className={Styles.quote_col}>
                  <div>
                    <span>
                      <BsDoorOpen className={Styles.quote_icon} />
                    </span>
                    <h4>Door To Door Deliveries</h4>
                    <p className={Styles.quote_p}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Praesentium, culpa excepturi amet exercitationem in
                      adipisci! Non beatae ullam dolores, ad voluptas quas. Ad
                      quam molestias neque impedit totam id sunt?
                    </p>
                  </div>
                </Col>
                <Col md={6} className={Styles.quote_col}>
                  <div>
                    <span>
                      <GiRoad className={Styles.quote_icon} />
                    </span>
                    <h4>Ground Transport</h4>
                    <p className={Styles.quote_p}>
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
