/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supaBaseData";
const SignUp = ({ logging }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function signUpNewUser(Email, Password) {
    const { data, error } = await supabase.auth.signUp({
      email: Email,
      password: Password,
      options: {
        emailRedirectTo: "https://example.com/welcome",
      },
    });
    if (data) {
      Console.log("You have successfully signed up");
    } else {
      Console.log("error");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(pass);

    signUpNewUser(email, pass);
  };

  return (
    <>
      <div className="bg-newNav/95 h-screen flex justify-center items-center">
        <div className="flex items-center p-8">
          <div className="bg-newNav sm:m-auto h-29 w-full sm:w-29 p-8 rounded-md border border-newDarkBlue shadow-lg">
            <h3 className="text-xl text-newLightestBlue mb-4">Bill Tracker</h3>
            <h1 className="text-newLightBlue text-4xl mb-4">Sign Up</h1>
            <form action="" className="w-full">
              <div className="inline-flex flex-col w-full">
                <label htmlFor="email" className="text-newDarkBlue mb-2">
                  Email
                </label>
                <div>
                  <input
                    type="text"
                    id="email"
                    placeholder="your@email.com"
                    className="px-3 py-2 rounded-md sm:w-96 mb-2 border border-newLightestBlue w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="inline-flex flex-col w-full mb-8">
                <label
                  htmlFor="password"
                  className="text-newDarkBlue mb-2 placeholder:text-sm"
                >
                  Password
                </label>
                <div>
                  <input
                    type="password"
                    id="password"
                    placeholder="password"
                    className="px-3 py-2 rounded-md sm:w-96 mb-2 border border-newLightestBlue w-full"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-2">
                <button
                  onClick={handleSubmit}
                  className="bg-newLightBlue text-newDarkBlue rounded-md sm:w-96 px-4 py-2 text-sm hover:bg-newLightestBlue hover:text-newLightBlue hover:shadow-md w-full mb-4"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div>
              <div className="h-half bg-newLightBlue w-full rounded-md mt-4"></div>
              <div className="flex justify-center mt-4">
                <p className="text-white">
                  Already have an account?{" "}
                  <span
                    className="text-newDarkBlue hover:cursor-pointer hover:text-newLightestBlue"
                    onClick={logging}
                  >
                    Sign In
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
