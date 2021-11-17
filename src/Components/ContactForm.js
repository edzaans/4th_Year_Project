import React from "react";
import Styles from "../Styles/ContactForm.module.css";

export class ContactForm extends React.Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class=" text-center mt-3"></div>
          <div class="row ">
            <div class="col-lg-12 mx-auto">
              <div class="card  mx-auto p-2 bg-light">
                <div class="card-body bg-light">
                  <div class="container">
                    <form id="contact-form" role="form">
                      <div class="controls">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              {" "}
                              <label for="form_name">First Name *</label>{" "}
                              <input
                                id="form_name"
                                type="text"
                                name="name"
                                class="form-control"
                                placeholder="Please enter your first name"
                                required="required"
                                data-error="Firstname is required."
                              />{" "}
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              {" "}
                              <label for="form_lastname">
                                Last Name *
                              </label>{" "}
                              <input
                                id="form_lastname"
                                type="text"
                                name="surname"
                                class="form-control"
                                placeholder="Please enter your last name"
                                required="required"
                                data-error="Lastname is required."
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              {" "}
                              <label for="form_email">Email *</label>{" "}
                              <input
                                id="form_email"
                                type="email"
                                name="email"
                                class="form-control"
                                placeholder="Please enter your email "
                                required="required"
                                data-error="Valid email is required."
                              />{" "}
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              {" "}
                              <label for="form_need">
                                Please specify your need *
                              </label>{" "}
                              <select
                                id="form_need"
                                name="need"
                                class="form-control"
                                required="required"
                                data-error="Please specify your need."
                              >
                                <option value="" selected disabled>
                                  --Select Your Issue--
                                </option>
                                <option>Request Invoice for order</option>
                                <option>Request order status</option>
                                <option>Haven't received cashback yet</option>
                                <option>Other</option>
                              </select>{" "}
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              {" "}
                              <label for="form_message">Message *</label>{" "}
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
                          <div class="col-md-12">
                            {" "}
                            <input
                              type="submit"
                              class="btn btn-success btn-send mt-3 btn-block "
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
        </div>
      </div>
    );
  }
}