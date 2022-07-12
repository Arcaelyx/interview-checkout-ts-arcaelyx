const initialState = {
  id: JSON.parse(localStorage.getItem('cartID')) || '',
  items: []
};

const cart = (state = initialState, action = { type: '', payload: [] }) => {
  switch (action.type) {
    case 'ADD_TO_CART_SUCCESS':
      return { ...state, items: action.payload.cartItems };
    case 'CREATE_CART_SUCCESS':
      localStorage.setItem('cartID', JSON.stringify(action.payload.id));
      return {
        ...state,
        id: action.payload.id,
        items: action.payload.cartItems
      };
    case 'DELETE_FROM_CART_SUCCESS':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case 'GET_CART_SUCCESS':
      return { ...state, items: action.payload.cartItems };
    default:
      return state;
  }
}

export default cart;