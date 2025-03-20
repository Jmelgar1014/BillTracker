import React from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useState } from "react";

const LoginPage = () => {
  const [logging, setLogging] = useState("false");

  const handleLog = () => {
    setLogging((prev) => !prev);
  };
  return (
    <>
      {logging ? (
        <SignIn logging={handleLog} />
      ) : (
        <SignUp logging={handleLog} />
      )}
    </>
  );
};

export default LoginPage;
