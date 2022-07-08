import { formatCentsToDollars } from '../utils/transformers';

const { REACT_APP_HOST: HOST } = process.env;

const Catalog = props => (
  <div className='App-product-catalog'>
    {props.products.map(product =>
      <div className='App-product' key={product.id}>
        <div className='App-product-info'>
          <div className='App-product-icon'><img src={`${HOST}${product.imageSrc}`} alt='' /></div>
          <div className='App-product-details'>
            <h1 className='App-product-name'>{product.name}</h1>
            {formatCentsToDollars(product.priceCents)}
          </div>
        </div>
        <div className='App-product-cart'>
          <button onClick={() => props.onClick(product.id)}>Add to cart</button>
        </div>
      </div>
    )}
  </div>
);

export default Catalog;