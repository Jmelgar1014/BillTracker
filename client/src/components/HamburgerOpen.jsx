import React from "react";

// eslint-disable-next-line react/prop-types
const HamburgerOpen = ({ handleHamburger }) => {
  return (
    <>
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white sm:hidden mr-4"
        onClick={handleHamburger}
      >
        <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
      </svg>
    </>
  );
};

export default HamburgerOpen;
