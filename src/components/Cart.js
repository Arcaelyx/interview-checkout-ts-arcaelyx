import { formatCentsToDollars } from '../utils/transformers';

import CartItem from './CartItem';

const Cart = props => {
  const cartItems = props.products.sort(() => 0.5 - Math.random()).slice(0, 7)
    .map((item, index) => ({ ...item, quantity: index + 1 }));

  return (
    <div className='App-product-catalog'>
      {cartItems.map(cartItem => <CartItem key={cartItem.id} {...cartItem} />)}
      <hr />
      <div className='App-row'>
        <div className='App-righter'>
          <div className='App-flex'>
            <div className='App-flex-col'>
              Subtotal:
            </div>
            <div className='App-flex-col'>
              {formatCentsToDollars(cartItems.map(cartItem => cartItem['quantity'] * cartItem['priceCents']).reduce((a, b) => a + b, 0))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;