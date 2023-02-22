import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartitem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartitem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deleteCartItem = (cartItems, productToDelete) => {
  const existingCartitem = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );

  if (existingCartitem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToDelete.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeCartItem = (cartItems, itemToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  deleteCheckoutItem: () => {},
  removeItem: () => {},
  cartTotal: [],
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCheckoutTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(newCheckoutTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const deleteCheckoutItem = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };

  const removeItem = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    deleteCheckoutItem,
    removeItem,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
