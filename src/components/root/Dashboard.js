import React, { Component } from 'react'
import {Row,Col} from "react-bootstrap"
import CategoryList from "../categories/CategoryList"
import ProductList from "../products/ProductList"
import "../../App.css"

export default class Dashboard extends Component {
  render() {
    return (
      <div class="dashboard">
        <Row>
            <Col xs="3">
                <CategoryList/>
            </Col>
            <Col xs="9">
                <ProductList/>
            </Col>
        </Row>
      </div>
    )
  }
}
