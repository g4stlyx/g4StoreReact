import React, { Component } from "react";
import { Badge, Nav, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";
import "../../App.css";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import alertify from "alertifyjs"

class CartSummary extends Component {
  removeFromCart = (product)=>{
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName+" has been removed!",1) 
  }

  renderEmpty() {
    return (
      <Nav.Item>
        <Nav.Link>Your Cart is Empty!</Nav.Link>
      </Nav.Item>
    );
  }

  renderSummary() {
    return (
      <NavDropdown
        title="My Cart"
        id="basic-nav-dropdown"
        className="cartDropdown"
      >
        {this.props.cart.map((cartItem) => (
          <NavDropdown.Item className="cartItems" key={cartItem.product.id}>
            <Badge
              bg="danger"
              onClick={(e) => {
                this.removeFromCart(cartItem.product)
                e.stopPropagation(); 
              }}>X</Badge>&nbsp;
            {cartItem.product.productName} &nbsp;
            <Badge bg="success">{cartItem.quantity}</Badge>
          </NavDropdown.Item>
        ))}

        <NavDropdown.Divider />
        <NavDropdown.Item href="#"><Link to="/cart">Go to the Cart</Link></NavDropdown.Item>
      </NavDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  //dışarıdan -redux'tan- aksiyon kullanabilmek için
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

function mapStateToProps(state) {
  //state'e bağlanabilmek için
  return {
    cart: state.cartReducer, // cartReducer'dan cart'ı state olarak çektik
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
