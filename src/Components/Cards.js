import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Styles from "../Styles/Cards.module.css";

import { AiOutlineAim } from "react-icons/ai";

export class Cards extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col
              xs={12}
              sm={6}
              lg={3}
              md={6}
              className={[Styles.columns, Styles.my2]}
            >
              <Card border="primary">
                <Card.Header>
                  <AiOutlineAim className={Styles.icons} />
                </Card.Header>
                <Card.Body>
                  <Card.Title>Vision</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col
              xs={12}
              sm={6}
              lg={3}
              md={6}
              className={[Styles.columns, Styles.my2]}
            >
              <Card border="primary">
                <Card.Header>
                  <AiOutlineAim className={Styles.icons} />
                </Card.Header>
                <Card.Body>
                  <Card.Title>Vision</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col
              xs={12}
              sm={6}
              lg={3}
              md={6}
              className={[Styles.columns, Styles.my2]}
            >
              <Card border="primary">
                <Card.Header>
                  <AiOutlineAim className={Styles.icons} />
                </Card.Header>
                <Card.Body>
                  <Card.Title>Vision</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col
              xs={12}
              sm={6}
              lg={3}
              md={6}
              className={[Styles.columns, Styles.my2]}
            >
              <Card border="primary">
                <Card.Header>
                  <AiOutlineAim className={Styles.icons} />
                </Card.Header>
                <Card.Body>
                  <Card.Title>Vision</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
