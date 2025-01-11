import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const SwitchToggle = () => {
  return (
    <>
      <FormControlLabel control={<Switch />} label="" className="float-end" />
    </>
  );
};

export default SwitchToggle;
