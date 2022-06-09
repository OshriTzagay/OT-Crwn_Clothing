import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contain productToAdd
  const matchedProduct = cartItems.find((item) => item.id === productToAdd.id);

  //if matchedProduct exist, increase quantity by 1
  if (matchedProduct) {
    return cartItems.map(
      (item) =>
        item.id === productToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item //! if there is a match , find the item and increase the quantity.(destructuring)
    );
  }
  //return the new cartItems array with the new products
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const matchedProduct = cartItems.find(
    (item) => item.id === productToRemove.id
  );

  if (matchedProduct.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }

  if (matchedProduct) {
    return cartItems.map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }

  return cartItems;
};

const clearCartItem = (cartItems, ItemToClear) => {
  return cartItems.filter((item) => item.id !== ItemToClear.id);
};

const calculateCartTotal = (cartItems) => {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCounter: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  calculateTotal: () => {},
});

export default function CartContextProvider({ children }) {
  const [cartCounter, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const clearItemFromCart = (ItemToClear) => {
    setCartItems(clearCartItem(cartItems, ItemToClear));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartCounter,
    setCartCount,
    clearItemFromCart,
    calculateCartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
