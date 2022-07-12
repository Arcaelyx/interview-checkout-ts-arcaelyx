import { useEffect } from 'react';
import { connect } from 'react-redux';

import { formatCentsToDollars } from '../utils/transformers';
import { handleEffect } from '../handlers'

import { createCart, deleteFromCart, getCart } from '../actions/cart';

import CartItem from './CartItem';

const Cart = props => {
  useEffect(handleEffect(props), [])
  return (
    <div className='App-product-catalog'>
      { props.cart.items.map(item => <CartItem key={item.id} {...item} />) }
      <hr />
      <div className='App-row'>
        <div className='App-righter'>
          <div className='App-flex'>
            <div className='App-flex-col'>
              Subtotal:
            </div>
            <div className='App-flex-col'>
              { formatCentsToDollars(props.cart.items.map(item => item['quantity'] * item['priceCents']).reduce((a, b) => a + b, 0)) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(({ cart }) => ({ cart }), {
  createCart,
  deleteFromCart,
  getCart
})(Cart);