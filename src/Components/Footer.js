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
const fbIcon = { color: "blue", fontSize: "1.5rem" };
const instaIcon = { color: "yellow", fontSize: "1.5rem" };
const twitterIcon = { color: "aqua", fontSize: "1.5rem" };
const youtubeIcon = { color: "red", fontSize: "1.5rem" };

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
            <FooterLink href="#">
              <i>
                <span style={{ marginLeft: "10px" }}>
                  <FaFacebookSquare style={fbIcon} />
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i>
                <span style={{ marginLeft: "10px" }}>
                  <AiFillInstagram style={instaIcon} />
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i>
                <span style={{ marginLeft: "10px" }}>
                  <AiFillTwitterSquare style={twitterIcon} />
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i>
                <span style={{ marginLeft: "10px" }}>
                  <AiFillYoutube style={youtubeIcon} />
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
