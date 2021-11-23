import React from "react";

import { Slide } from "./Slide";
import { Quote } from "./Quote";
import { ContactForm } from "./ContactForm";
import Footer from "./Footer";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Slide />
        <Quote />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}
