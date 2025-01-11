/* eslint-disable react/prop-types */
import React from "react";
import UserRow from "./UserRow";
import supabase from "../../supaBaseData";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Dialog from "../components/Dialog";

import { isAuthSessionMissingError } from "@supabase/supabase-js";

const HistoryTable = ({ data }) => {
  return (
    <>
      <div className="flex justify-center m-16">
        <table className="table-fixed w-[800px] border-separate border-spacing-0 border-2  rounded-t-3xl border-slate-300 shadow-md">
          <thead className="">
            <tr className="h-16 ">
              <th className="m-4 p-2 mx-16 ">Vendor</th>
              <th className="m-4 p-2 mx-16 ">Amount</th>
              <th className="m-4 p-2 mx-16 ">Date</th>
            </tr>
          </thead>
          <tbody className=" ">
            {data.length > 0
              ? data.map((item) => (
                  <tr
                    className="hover:bg-slate-300/30 cursor-pointer"
                    key={item.item_id}
                  >
                    <td className="border-t-2 border-r-2 border-slate-300 ">
                      <div className="flex justify-center m-2 p-2 rounded-xl">
                        {item.vendor}
                      </div>
                    </td>
                    <td className="border-t-2 border-r-2 border-slate-300 ">
                      <div className="flex justify-center m-2 p-2">
                        {item.billamount}
                      </div>
                    </td>
                    <td className="border-t-2 border-slate-300 ">
                      <div className="flex justify-center m-2 p-2 relative">
                        {item.billdate}
                        <div className=" absolute  right-0">
                          <Dialog item={item} />
                        </div>

                        {/* <button
                          className=" absolute  right-0"
                          value={item.item_id}
                          onClick={removeItem}
                        >
                          <FaTrash className=" text-xl hover:text-red-700  rounded-md " />
                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))
              : "Submit information to display here."}{" "}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HistoryTable;
