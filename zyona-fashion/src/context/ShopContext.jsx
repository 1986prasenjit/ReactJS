import { createContext, useState } from "react";

import { products } from "../assets/assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";

  const delieveryFee = 10;

  const [search, setSearch] = useState("");

  const [showSearch, setShowSearch] = useState(false);

  const value = {
    currency,
    delieveryFee,
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
