import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatCentsToDollars, itemQuantity } from '../utils/transformers';

import { getCart } from '../actions/cart';

import CartIcon from './CartIcon';

const Header = props => {
  useEffect(() => props.getCart(props.cart.id), []);
  return (
    <header className='App-header'>
      <ul className='App-nav'>
        <li><Link to='/'>Product catalog</Link></li>
        <li>
          <Link to='/cart'>
            <CartIcon />
            { ' ' }
            { itemQuantity(props) } in cart | Total:
            { ' ' }
            { formatCentsToDollars(props.cart.items.map(item => item['quantity'] * item['priceCents']).reduce((a, b) => a + b, 0)) }
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default connect(({ cart }) => ({ cart }), { getCart })(Header);