import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModalReserve = this.toggleModalReserve.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.handleReserve = this.handleReserve.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  toggleModalReserve() {
    this.setState({
      isReserveOpen: !this.state.isReserveOpen,
    });
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  handleOrder(event) {
    this.toggleModal();
    event.preventDefault();
  }
  handleReserve(event) {
    this.toggleModal();
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="../assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <Collapse navbar isOpen={this.state.isNavOpen}>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Order
                  </Button>
                </NavItem>
                <NavItem>
                  <Button outline onClick={this.toggleModalReserve}>
                    <span className="fa fa-sign-in fa-lg"></span> Reserve
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>B's & P's</h1>
                <p>
                  The Place to go to for you burger and pizza lovers!
                  <br /> At B's & P's you will have one of your greatest food
                  experience,
                  <br />
                  With our delicious burgers and pizzas
                  <br />
                  <h3>Let's Get Eating!!!</h3>
                </p>
              </div>
              <div className="col-12 col-sm-6">
                <img
                  className="img img-fluid"
                  src="../assets/images/background.jpeg"
                  alt="B's & P's"
                />
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Order</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  innerRef={(input) => (this.name = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="address">Address</Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  innerRef={(input) => (this.address = input)}
                />
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      innerRef={(input) => (this.city = input)}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input
                      type="text"
                      name="stat"
                      id="exampleState"
                      innerRef={(input) => (this.stat = input)}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input
                      type="text"
                      name="zip"
                      id="exampleZip"
                      innerRef={(input) => (this.zip = input)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="rememberaddr"
                    innerRef={(input) => (this.rememberaddr = input)}
                  />{" "}
                  Remember my Address
                </Label>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="order">Your Order</Label>
                <Input
                  type="textarea"
                  id="order"
                  name="order"
                  innerRef={(input) => (this.order = input)}
                />
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Order
              </Button>
            </Form>
          </ModalBody>
        </Modal>
        <Modal
          isOpen={this.state.isReserveOpen}
          toggle={this.toggleModalReserve}
        >
          <ModalHeader toggle={this.toggleModalReserve}>
            Reserve A Table
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleReserve}>
              <FormGroup>
                <Label htmlFor="reservename">Reservation Name</Label>
                <Input
                  type="text"
                  id="reservename"
                  name="reservename"
                  innerRef={(input) => (this.reservename = input)}
                />
              </FormGroup>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="time">Time</Label>
                    <Input
                      type="time"
                      id="time"
                      name="time"
                      innerRef={(input) => (this.time = input)}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      type="date"
                      id="date"
                      name="date"
                      innerRef={(input) => (this.date = input)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="select">Select Number Of People</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  innerRef={(input) => (this.select = input)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </Input>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Reserve
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
