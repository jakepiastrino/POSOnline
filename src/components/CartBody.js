import React, { Component } from 'react';
import '../css/CartBody.css';

class CartBody extends Component {
  render() {
    return (
      <div className="CartBody">
      	<div className="BodyContentWidthRestrict">
      		<div>CART EMPTY</div>
      	</div>
      </div>
    );
  }
}

export default CartBody;