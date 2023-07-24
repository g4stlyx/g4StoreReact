import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "../../App.css";
import CartSummary from "../cart/CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <div className="nav-main">
      <Navbar expand="lg" className="bg-body-tertiary nav">
        
          <div class="navBrand">
            <Navbar.Brand href="#"><Link to="/">g4 Store</Link></Navbar.Brand>
          </div>
          <div class="navRight">

          <Navbar>
              <Nav className="me-auto">
                <Nav.Link><Link to="/saveproduct">New Product</Link></Nav.Link>
              </Nav>
              &nbsp;&nbsp;
              <CartSummary />
          </Navbar>
          </div>
      </Navbar>
      </div>
    );
  }
}
