import React, { createContext, useContext, useState } from "react";
import Navbar from "./Navbar";
import DrawerLeft from "./DrawerLeft";
import { Outlet } from "react-router-dom";
import { StyledBox } from "./CustomField";

// context used to reduce the props drilling
const contextActive = createContext({});

const Layout = () => {
  // determine drawer active or inactive
  const [openDrawer, setOpenDrawer] = useState(false);

  // determine which pages is active
  const [active, setActive] = useState("dashboard");

  // If openDrawer true width going to take it for drawer
  const width = openDrawer ? { width: "calc(100% - 200px)" } : null;
  
  return (
    <>
      <contextActive.Provider value={{ active, setActive }}>
        <Navbar drawerActive={{ openDrawer, setOpenDrawer }} />
        <DrawerLeft drawerActive={{ openDrawer, setOpenDrawer }} />
        <StyledBox
          sx={{
            width,
          }}
        >
          <Outlet />
        </StyledBox>
      </contextActive.Provider>
    </>
  );
};

// coustomHooks created for access the data from contextActive

export const useActive = () => {
  return useContext(contextActive);
};

export default Layout;
