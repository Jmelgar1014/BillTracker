import React from "react";

// eslint-disable-next-line react/prop-types
const HamburgerClosed = ({ handleHamburger }) => {
  return (
    <>
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white sm:hidden mr-4 cursor-pointer"
        onClick={handleHamburger}
      >
        <path
          fill="currentColor"
          d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
        />
      </svg>
    </>
  );
};

export default HamburgerClosed;
