/* eslint-disable react/prop-types */
import React from "react";

import Dialog from "../components/Dialog";
import MonthList from "./MonthList";

const CurrentTable = ({ data, refresh }) => {
  return (
    <>
      <div className="flex justify-center m-16">
        <table className="table-auto w-[600px] border-separate border-spacing-0 border-2  rounded-t-3xl border-slate-300 shadow-md">
          <thead className="">
            <tr className="h-16 ">
              <th className="m-4 p-2 mx-16 underline">Vendor</th>
              <th className="m-4 p-2 mx-16 underline">Amount</th>
              <th className="m-4 p-2 mx-16 underline">Date</th>
            </tr>
          </thead>
          <tbody className=" ">
            {data.length > 0 ? (
              data.map((item) => (
                <tr
                  className="hover:bg-slate-300/30 cursor-pointer"
                  key={item.item_id}
                >
                  <td className="border-t-2 border-r-2 border-slate-300 ">
                    <div className="flex justify-center  rounded-xl">
                      {item.vendor}
                    </div>
                  </td>
                  <td className="border-t-2 border-r-2 border-slate-300 ">
                    <div className="flex justify-center  ">
                      {item.billamount}
                    </div>
                  </td>
                  <td className="border-t-2 border-slate-300 ">
                    <div className="flex justify-evenly items-center p-2 relative">
                      {item.billdate}
                      <div className="  bg-black rounded-md m-2 ">
                        <Dialog
                          className="p-0"
                          item={item}
                          onDelete={refresh}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="flex justify-center w-full">
                Submit information to display here.
              </tr>
            )}{" "}
          </tbody>
        </table>
        <MonthList />
      </div>
    </>
  );
};

export default CurrentTable;
