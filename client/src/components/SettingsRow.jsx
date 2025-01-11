/* eslint-disable react/prop-types */
import React from "react";

const SettingsRow = ({ title, setting }) => {
  return (
    <>
      <div className="flex">
        <div className="w-9/12 text-xl">{title}</div>
        <div className="w-3/12 float-end">{setting}</div>
      </div>
    </>
  );
};

export default SettingsRow;
