import React, { Component, useReducer } from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  };
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({
      ingredients: ingredients,
      price: price,
    });
  }
  checkoutCancelled = () => {
    this.props.history.goBack();
  };
  checkoutContinued = () => {
    this.props.history.replace('/Checkout/contact-data');
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinued={this.checkoutContinued}
          checkoutCancelled={this.checkoutCancelled}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => {
            return (
              <ContactData
                ingredients={this.state.ingredients}
                price={this.state.price}
                {...props}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default Checkout;
