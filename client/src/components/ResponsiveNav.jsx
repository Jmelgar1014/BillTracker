import React from "react";
import { NavLink, Link } from "react-router-dom";
import supabase from "../../supaBaseData";
import { useNavigate } from "react-router-dom";
const ResponsiveNav = () => {
  const signOut = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();

    navigate("/login");
  };
  return (
    <>
      <div className="absolute top-24 right-1">
        <nav className=" bg-white w-96 flex justify-center">
          <ul className="">
            <li>
              <NavLink
                to="/home"
                className="mr-4 text-xl text-black hover:text-navText"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/history"
                className="mr-4 text-xl text-black hover:text-navText"
              >
                History
              </NavLink>
            </li>

            <li>
              <Link
                to="/"
                onClick={signOut}
                className="mr-4 text-xl text-black hover:text-navText"
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ResponsiveNav;
