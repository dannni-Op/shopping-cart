import { createContext, useState } from "react";

export const CartContext = createContext(null);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);

  const data = {
    cart,
    setCart,
  };

  return (
    <>
      <CartContext.Provider value={data}>{children}</CartContext.Provider>
    </>
  );
};
