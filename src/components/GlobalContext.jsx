import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const theme = useTheme();

  const upTablet = useMediaQuery(`(min-width:${theme.breakpoints.values.sm}px)`);

  const openSidebarState = upTablet && openSidebar;

  const instanceContext = {
    openSidebarState,
    setOpenSidebar
  };

  return (
    <GlobalContext.Provider value={instanceContext}>
      {props.children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("Missing GlobalContextProvider Wrapper");
  }
  return context;
};

export { GlobalContextProvider, GlobalContext, useGlobalContext };