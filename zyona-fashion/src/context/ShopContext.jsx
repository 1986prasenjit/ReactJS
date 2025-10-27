import { createContext } from "react";

import { products } from "../assets/assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";

  const delieveryFee = 10;

  const value = {
    currency,
    delieveryFee,
    products,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
