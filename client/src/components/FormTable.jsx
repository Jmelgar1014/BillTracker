/* eslint-disable react/prop-types */
import React from "react";
import Form from "./Form";
const FormTable = ({ onSub }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-96 mt-14 ">
          <Form onFormSubmit={onSub} />
        </div>
      </div>
    </>
  );
};

export default FormTable;
