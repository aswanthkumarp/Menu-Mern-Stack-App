import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [refreshMenus, setRefreshMenus] = useState(false);

  const triggerRefresh = () => {
    setRefreshMenus((prev) => !prev); 
  };

  return (
    <MenuContext.Provider value={{ refreshMenus, triggerRefresh }}>
      {children}
    </MenuContext.Provider>
  );
};
