import React from "react";
import Styles from "../Styles/ContactForm.module.css";

export class ContactForm extends React.Component {
  render() {
    return (
      <div>
        <div className={Styles.container}>
          <div class="row ">
            <div class="col-lg-12 mx-auto">
              <h2 className={Styles.contact_h2}>GET IN TOUCH</h2>
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <p className={Styles.contact_p}>
                    We thrive when coming up with innovative ideas but also
                    understand that a smart concept should be supported with
                    measurable results.
                  </p>
                </div>
              </div>

              <div class="container">
                <form id="contact-form" role="form">
                  <div class="controls">
                    <div class="row">
                      <div class="col-md-12 mb-3">
                        <div class="form-group">
                          {" "}
                          <input
                            className={Styles.contact_input}
                            id="form_name"
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Your name*"
                            required="required"
                            data-error="Name is required."
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          {" "}
                          {/*  <label for="form_email">Email *</label>{" "} */}
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            class="form-control"
                            placeholder="Your email* "
                            required="required"
                            data-error="Valid email is required."
                          />{" "}
                        </div>
                      </div>
                      <div class="col-md-12 mt-3">
                        <div class="form-group">
                          {" "}
                          <input
                            id="form_subject"
                            type="text"
                            name="subject"
                            class="form-control"
                            placeholder="Your subject* "
                            required="required"
                            data-error="Subject entry is required."
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 mt-3">
                        <div class="form-group">
                          {" "}
                          {/*    <label for="form_message">Message *</label>{" "} */}
                          <textarea
                            id="form_message"
                            name="message"
                            class="form-control"
                            placeholder="Write your message here."
                            rows="4"
                            required="required"
                            data-error="Please, leave us a message."
                          ></textarea>{" "}
                        </div>
                      </div>
                      <div class="col-md-12 text-center">
                        {" "}
                        <input
                          type="submit"
                          class="btn btn-success"
                          className={Styles.contact_btn}
                          value="Send Message"
                        />{" "}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
