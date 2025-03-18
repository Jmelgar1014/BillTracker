import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supaBaseData";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function signInWithEmail(Email, Password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: Email,
      password: Password,
    });
    if (data.session) {
      navigate("/home");
    }

    if (error) {
      alert("Email/Password is incorrect");
      return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(pass);

    signInWithEmail(email, pass);
  };

  return (
    <>
      <div className="bg-newNav/95 h-screen flex justify-center items-center">
        <div className="flex items-center p-8">
          <div className="bg-newNav sm:m-auto h-29 w-full sm:w-29 p-8 rounded-md border border-newDarkBlue shadow-lg">
            <h3 className="text-xl text-newLightestBlue mb-4">Bill Tracker</h3>
            <h1 className="text-newLightBlue text-4xl mb-4">Sign In</h1>
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
              <div className="inline-flex flex-col w-full mb-10">
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
                  className="bg-newLightBlue text-newDarkBlue rounded-md sm:w-96 px-4 py-2 text-sm hover:bg-newLightestBlue hover:text-newLightBlue hover:shadow-md w-full"
                >
                  Sign In
                </button>
              </div>
              <div className="flex justify-center">
                <button className="text-newLightBlue hover:text-newLightestBlue underline">
                  Forgot your password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
