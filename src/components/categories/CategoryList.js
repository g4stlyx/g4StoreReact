import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions"
import { ListGroup,Badge } from "react-bootstrap";


class CategoryList extends Component {
  componentDidMount() {
    // = uygulama açıldığında kategorileri çek, state'i değiştir
    this.props.actions.getCategories();

  }

  selectCategory = category=>{
      this.props.actions.changeCategory(category)
      this.props.actions.getProducts(category.id)
  }

  render() {
    return (
      <div>
        <h3><Badge bg="warning"> 
              Categories            
            </Badge></h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroup.Item
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

// Bir state'i props'a bağlamak için, amacı store'da tekelleşmiş datayı çekmek
// state = reducer in redux
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
    //alttaki mapDispatchToProps ile actions'dan categoryListReducer'ı buraya getirdik
    //bu da fetch ile api'den kategorileri çekmemize yaradı
  };
}

// Aksiyon çağırmak için
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts:bindActionCreators(
        productActions.getProducts,
        dispatch
      )
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
