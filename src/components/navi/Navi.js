import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../../App.css";
import CartSummary from "../cart/CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div class="navBrand">
            <Navbar.Brand href="#"><Link to="/">g4 Store</Link></Navbar.Brand>
          </div>
          <div class="navRight">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link><Link to="/saveproduct">New Product</Link></Nav.Link>
              </Nav>
              &nbsp;&nbsp;
              <CartSummary />
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    );
  }
}
