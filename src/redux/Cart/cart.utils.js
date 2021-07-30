/* eslint-disable max-len */
export const existingCartItem = ({
  prevCartItems,
  nextCartItem,
}) => prevCartItems.find((cartItem) => cartItem.documentID === nextCartItem.documentID);

export const handleAddToCart = ({ prevCartItems, nextCartItem }) => {
  const quantityIncrement = 1;
  const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });

  if (cartItemExists) {
    return prevCartItems.map((cartItem) => (cartItem.documentID === nextCartItem.documentID
      ? {
        ...cartItem,
        quantity: cartItem.quantity + quantityIncrement,
      }
      : cartItem));
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement,
    },
  ];
};

export function handleRemoveCartItem({ prevCartItems, cartItemToRemove }) {
  const cartItems = prevCartItems.filter((item) => item.documentID !== cartItemToRemove.documentID);

  return cartItems;
}

export const handleReduceCartItem = ({
  prevCartItems,
  cartItemToReduce,
}) => {
  const existingCartItem = prevCartItems.find((cartItem) => cartItem.documentID === cartItemToReduce.documentID);

  if (existingCartItem.quantity === 1) {
    return prevCartItems.filter(
      (cartItem) => cartItem.documentID !== existingCartItem.documentID,
    );
  }

  return prevCartItems.map((cartItem) => (cartItem.documentID === existingCartItem.documentID
    ? {
      ...cartItem,
      quantity: cartItem.quantity - 1,
    } : cartItem));
};
