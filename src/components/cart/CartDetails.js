import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions"
import { connect } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import "../../App.css"
import alertify from "alertifyjs"


class CartDetails extends Component {
    
    removeFromCart = (product)=>{
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName+" has been removed!",1)
    }
  
    render() {
        return (
        <div class="cartDetailsTable">
            <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {this.props.cart.map(cartItem => (
                <tr key={cartItem.product.id}>
                    <th scope="row">{cartItem.product.id}</th>
                    <td>{cartItem.product.productName}</td>
                    <td>{cartItem.product.unitPrice}</td>
                    <td>{cartItem.quantity}</td>
                    <td><Button variant="danger" onClick={()=>this.removeFromCart(cartItem.product)}>Remove</Button></td>
                </tr>
                ))}
            </tbody>
            </Table>
        </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: {
        removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
      },
    };
  }
  
  function mapStateToProps(state) {
    return {
      cart: state.cartReducer,
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
