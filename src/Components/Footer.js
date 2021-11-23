import React from "react";

// Import Style components
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

// Import Icon name to be used ( use as a component in code )
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

// Declare Icon styles here
const fbIcon = { color: "#4267B2", fontSize: "1.5rem" };
const instaIcon = { color: "yellow", fontSize: "1.5rem" };
const twitterIcon = { color: "aqua", fontSize: "1.5rem" };
const youtubeIcon = { color: "red", fontSize: "1.5rem" };

// Importing assets

const fb2_3d = require("../Assets/facebook_logo2_gif.gif");
const twitter_3d = require("../Assets/twitter_logo_web.gif");
const insta_3d = require("../Assets/insta_logo_gif.gif");
const youtube_3d = require("../Assets/YouTube_logo_gif.gif");

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Delivery</FooterLink>
            <FooterLink href="#">Packaging</FooterLink>
            <FooterLink href="#">Management</FooterLink>
            <FooterLink href="#">Tracking</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">roade@support.ie</FooterLink>
            <FooterLink href="#">+353 9100000</FooterLink>
            <FooterLink href="#">www.roade.ie</FooterLink>
          </Column>

          <Column>
            <Heading>Social Media</Heading>
            <Row>
              <Column>
                {" "}
                <FooterLink href="#">
                  <i>
                    <span style={{ marginLeft: "10px" }}>
                      <img
                        src={fb2_3d.default}
                        alt="FB gif"
                        width="50"
                        height="50"
                      />
                    </span>
                  </i>
                </FooterLink>
              </Column>
              <Column>
                {" "}
                <FooterLink href="#">
                  <i>
                    <span style={{ marginLeft: "10px" }}>
                      <img
                        src={insta_3d.default}
                        alt="Twitter gif"
                        width="50"
                        height="50"
                      />
                    </span>
                  </i>
                </FooterLink>
              </Column>
            </Row>
            <Row>
              <Column>
                {" "}
                <FooterLink href="#">
                  <i>
                    <span style={{ marginLeft: "10px" }}>
                      <img
                        src={twitter_3d.default}
                        alt="Twitter gif"
                        width="50"
                        height="50"
                      />
                    </span>
                  </i>
                </FooterLink>
              </Column>
              <Column>
                {" "}
                <FooterLink href="#">
                  <i>
                    <span style={{ marginLeft: "10px" }}>
                      <img
                        src={youtube_3d.default}
                        alt="Twitter gif"
                        width="50"
                        height="50"
                      />
                    </span>
                  </i>
                </FooterLink>
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
