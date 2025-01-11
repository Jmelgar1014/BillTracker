/* eslint-disable react/prop-types */
import React from "react";
import supabase from "../../supaBaseData";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

const Form = ({ onFormSubmit }) => {
  const [vendor, setVendor] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    //checks if any of inputs are blank
    if (!vendor || !amount || !date) {
      setAlert(true);
      setSuccess(false);
    } else {
      //POSTS data into table
      const { data, error } = await supabase.from("row_items").insert({
        vendor: vendor,
        billamount: amount,
        billdate: date,
      });

      if (error) {
        console.log(error);

        setSuccess(false);
      }
      onFormSubmit();

      setAmount("");
      setVendor("");
      setDate("");
      setAlert(false);
      setSuccess(true);
    }
  };

  return (
    <>
      <form action="" className="flex flex-col" onSubmit={submitForm}>
        {alert ? (
          <Alert className="mb-4" severity="error">
            Please Enter the missing Information.
          </Alert>
        ) : (
          ""
        )}
        {success ? (
          <Alert className="mb-4" severity="success">
            Information has been successfully added
          </Alert>
        ) : (
          ""
        )}

        <div className="flex justify-center mb-4">
          <TextField
            className="w-60"
            id="outlined-basic"
            label="Vendor:"
            variant="outlined"
            value={vendor}
            size="small"
            onChange={(e) => setVendor(e.target.value)}
          />
        </div>
        <div className="flex justify-center mb-4">
          <TextField
            className="w-60"
            id="outlined-basic"
            label="Amount:"
            variant="outlined"
            size="small"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex justify-center mb-4">
          <TextField
            className="w-60"
            id="outlined-basic"
            variant="outlined"
            value={date}
            size="small"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <Button className="w-60" variant="contained" onClick={submitForm}>
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
