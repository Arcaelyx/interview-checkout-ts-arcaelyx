export const initialState = {
  status: 'idle',
  state: [{
    id: 0,
    imageSrc: '/images/loading.svg',
    name: 'Loading...',
    priceCents: 0
  }]
}

const products = (state = initialState, action = { type: '', payload: [] }) => {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return { ...state, status: 'succeeded', state: action.payload };
    case 'GET_PRODUCTS_FAIL':
      return { ...state, status: 'failed' };
    default:
      return state;
  }
}

export default products;