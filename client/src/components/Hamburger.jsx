import { Experimental_CssVarsProvider } from "@mui/material";
import React from "react";
import { useState } from "react";
import HamburgerClosed from "./HamburgerClosed";
import HamburgerOpen from "./HamburgerOpen";
import ResponsiveNav from "./ResponsiveNav";
const Hamburger = () => {
  const [hamburger, setHamburger] = useState(false);
  const mobileMenu = () => {
    if (hamburger) {
      setHamburger(false);
      console.log("closed");
    } else {
      setHamburger(true);
      console.log("opened");
    }
  };

  return (
    <>
      {hamburger ? (
        <>
          <HamburgerClosed handleHamburger={mobileMenu} />
          <ResponsiveNav />
        </>
      ) : (
        <HamburgerOpen handleHamburger={mobileMenu} />
      )}
    </>
  );
};

export default Hamburger;
