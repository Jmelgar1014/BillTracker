import React from "react";
import { NavLink, Link } from "react-router-dom";
import supabase from "../../supaBaseData";
import { useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useState } from "react";
import ResponsiveNav from "./ResponsiveNav";
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const navigate = useNavigate();

  const signOut = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();

    navigate("/login");
  };

  const activeLink = ({ isActive }) =>
    isActive
      ? "m-2 mr-4 p-3 cursor-pointer  text-newLightBlue text-xl hover:border-white  rounded-md font-sans"
      : "m-2 mr-4 p-1 cursor-pointer text-xl text-newLightBlue  rounded-md hover:border-white hover:text-newLightestBlue";

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <>
      <div className="bg-newNav h-20 flex items-center justify-between shadow-lg">
        <span className="text-2xl ml-4 text-newLightBlue">Bill Tracker</span>

        <div className="">
          <Hamburger isOpen={hamburger} toggleHamburger={toggleHamburger} />
          <nav className="hidden sm:block ">
            <ul className="flex">
              <li>
                <NavLink className={activeLink} to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={activeLink} to="/history">
                  History
                </NavLink>
              </li>

              <li>
                <Link
                  to="/"
                  onClick={signOut}
                  className="mr-4 text-xl text-newLightBlue hover:text-newLightestBlue"
                >
                  Sign Out
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <ResponsiveNav isOpen={hamburger} signOut={signOut} className="" />
    </>
  );
};

export default Navbar;
