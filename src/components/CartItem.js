import { formatCentsToDollars } from '../utils/transformers';

const { REACT_APP_HOST: HOST } = process.env;

const quantity = [...Array(10).keys()].map(x => ++x);

const CartItem = props => (
  <div className='App-product'>
    <div className='App-product-info'>
      <div className='App-product-icon'><img src={`${HOST}${props.imageSrc}`} alt='' /></div>
      <div className='App-product-details'>
        <h1 className='App-product-name'>{ props.name }</h1>
        { formatCentsToDollars(props.priceCents) }
      </div>
    </div>
    <div className='App-product-cart'>
      <div>
        <select>
          { quantity.map(n => <option key={n} value={n}>{ n }</option>) }
        </select>
      </div>
      <div>
        { formatCentsToDollars(props.quantity * props.priceCents) }
      </div>
    </div>
  </div>
)

export default CartItem;