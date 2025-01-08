/* eslint-disable react/prop-types */
import React from "react";

const UserRow = ({ row }) => {
  return (
    <>
      <div>
        <div>
          <ul className="flex ">
            <li className="m-2 font-xl ">{row.vendor}</li>
            <li className="m-2 font-xl ">{row.billamount}</li>
            <li className="m-2 font-xl ">{row.billdate}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserRow;
