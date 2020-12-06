import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Label,
  Col,
} from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    this.props.postFeedback(
      values.firstname,
      values.lastname,
      values.telnum,
      values.email,
      values.agree,
      values.contactType,
      values.message
    );
    this.props.resetFeedbackForm();
  }
  render() {
    return (
      <div className="container text-white">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              AIN AL MRAYSE STREET
              <br />
              ZAITUNA BAY
              <br />
              LEBANON
              <br />
              <i className="fa fa-phone"></i>: +961 70 701111
              <br />
              <i className="fa fa-fax"></i>: +961 70 701112
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:bs&ps@food.net">bs&ps@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+96170701111"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" href="skype:none" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:bs&ps@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send Us Your Feedback</h3>
            <hr />
            <div className=" col-12 col-md-9">
              <Form
                model="feedback"
                onSubmit={(values) => this.handleSubmit(values)}
              >
                <Row className="form-group">
                  <Label htmlfor="firstname" md={2}>
                    First Name
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".firstname"
                      id="firstname"
                      name="firstname"
                      placeholder="First Name"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".firstname"
                      show="touched"
                      messages={{
                        required: "Required",
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlfor="lastname" md={2}>
                    First Name
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".lastname"
                      className="form-control"
                      id="lastname"
                      name="lastname"
                      placeholder="Last Name"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".lastname"
                      show="touched"
                      messages={{
                        required: "Required ",
                        minLength: " Must be greater than 2 characters ",
                        maxLength: " Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlfor="telnum" md={2}>
                    Contact Tel.
                  </Label>
                  <Col md={10}>
                    <Control.text
                      className="form-control"
                      model=".telnum"
                      id="telnum"
                      name="telnum"
                      placeholder="Tel. Number"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                        isNumber,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".telnum"
                      show="touched"
                      messages={{
                        required: " Required",
                        minLength: " Must be greater than 2 numbers ",
                        maxLength: " Must be 15 numbers or less ",
                        isNumber: " Must be a number ",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlfor="email" md={2}>
                    Email
                  </Label>
                  <Col md={10}>
                    <Control.text
                      className="form-control"
                      model=".email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      validators={{
                        required,
                        validEmail,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                        required: " Required ",
                        validEmail: " Invalid Email Address ",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 6, offset: 2 }}>
                    <div className="form-check">
                      <Label check>
                        <Control.checkbox
                          model=".agree"
                          className="form-check-input"
                          type="checkbox"
                          name="agree"
                        />{" "}
                        <strong>May we contact you?</strong>
                      </Label>
                    </div>
                  </Col>
                  <Col md={{ size: 3, offset: 1 }}>
                    <Control.select
                      model=".contactType"
                      name="contactType"
                      className="form-control"
                    >
                      <option>Tel.</option>
                      <option>Email</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlfor="feedback" md={2}>
                    Your Feedback
                  </Label>
                  <Col md={10}>
                    <Control.textarea
                      model=".message"
                      type="textarea"
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Give us your Feedback..."
                      rows="12"
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="primary">
                      Send Feedback
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
