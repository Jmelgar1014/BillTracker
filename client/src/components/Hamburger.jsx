/* eslint-disable react/prop-types */
import { Experimental_CssVarsProvider } from "@mui/material";
import React from "react";
import { useState } from "react";
import HamburgerClosed from "./HamburgerClosed";
import HamburgerOpen from "./HamburgerOpen";
import ResponsiveNav from "./ResponsiveNav";
const Hamburger = ({ isOpen, toggleHamburger }) => {
  return (
    <>
      <div className="relative">
        {isOpen ? (
          <>
            <HamburgerClosed handleHamburger={toggleHamburger} />
          </>
        ) : (
          <HamburgerOpen handleHamburger={toggleHamburger} />
        )}
      </div>
    </>
  );
};

export default Hamburger;
