import { Link } from 'react-router-dom';

import CartIcon from './CartIcon'

const Header = () => (
  <header className='App-header'>
    <ul className='App-nav'>
      <li><Link to='/'>Product catalog</Link></li>
      <li>
        <Link to='/cart'>
          <CartIcon />
          {' '}
          No items in cart | Total: $0.00
        </Link>
      </li>
    </ul>
  </header>
)

export default Header;