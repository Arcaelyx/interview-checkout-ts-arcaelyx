export const handleClick = (props, productID) => {
  props.addToCart({
    cartID: props.cart.id,
    productId: productID,
    quantity: 1
  });
}

export const handleEffect = props => () => {
  if (!props.cart.id) {
    props.createCart();
  } else {
    props.getCart(props.cart.id);
  }
}
