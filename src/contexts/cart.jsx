import { createContext, useState } from "react";

export const CartContext = createContext(null);
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  function addValue(item) {
    const isItemInCart = cartItems.find((e) => e.id == item.id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((e) => {
          const result =
            e.id == item.id ? { ...e, quantity: e.quantity + 1 } : e;
          return result;
        })
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  }

  function reduceValue(item) {
    const isItemInCart = cartItems.find((e) => e.id == item.id);

    if (isItemInCart.quantity === 1 || isItemInCart.quantity === 0) {
      setCartItems(cartItems.filter((e) => e.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((e) => {
          const result =
            e.id === item.id ? { ...e, quantity: e.quantity - 1 } : e;
          return result;
        })
      );
    }
  }

  function changeValue(item) {
    const isItemInCart = cartItems.find((e) => e.id == item.id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((e) => {
          const result =
            e.id == item.id ? { ...e, quantity: item.quantity } : e;
          return result;
        })
      );
    }
  }

  const data = {
    cartItems,
    setCartItems,
    addValue,
    reduceValue,
    changeValue,
  };

  return (
    <>
      <CartContext.Provider value={data}>{children}</CartContext.Provider>
    </>
  );
};
