import { useEffect } from 'react';
import { connect } from 'react-redux';

import { formatCentsToDollars } from '../utils/transformers';
import { handleClick } from '../handlers'

import { addToCart } from '../actions/cart';
import { getProducts } from '../actions/products';

const { REACT_APP_HOST: HOST } = process.env;

const Catalog = props => {
  useEffect(() => props.getProducts(), []);
  return (
    <div className='App-product-catalog'>
      { props.products.map(product =>
        <div className='App-product' key={product.id}>
          <div className='App-product-info'>
            <div className='App-product-icon'><img src={`${HOST}${product.imageSrc}`} alt='' /></div>
            <div className='App-product-details'>
              <h1 className='App-product-name'>{product.name}</h1>
              {formatCentsToDollars(product.priceCents)}
            </div>
          </div>
          <div className='App-product-cart'>
            <button onClick={() => handleClick(props, product.id)}>Add to cart</button>
          </div>
        </div>
      ) }
    </div>
  );
}

export default connect(({ cart, products }) => ({
  cart,
  products
}), {
  addToCart,
  getProducts
})(Catalog);