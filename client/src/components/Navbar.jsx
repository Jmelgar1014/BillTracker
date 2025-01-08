import React from "react";
import { NavLink, Link } from "react-router-dom";
import supabase from "../../supaBaseData";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const signOut = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();

    navigate("/login");
  };

  const activeLink = ({ isActive }) =>
    isActive
      ? "m-2 mr-4 p-3 cursor-pointer bg-black text-white hover:border-white hover:text-white rounded-md"
      : "m-2 mr-4 p-1 cursor-pointer  rounded-md hover:border-white hover:text-white";
  return (
    <>
      <div className="bg-Nav h-20 flex items-center justify-between shadow-md">
        <span className="text-2xl ml-4 ">Bill Tracker</span>

        <div className="">
          <nav>
            <ul className="flex">
              <li>
                <NavLink className={activeLink} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={activeLink} to="/history">
                  History
                </NavLink>
              </li>
              <li>
                <NavLink className={activeLink} to="/account">
                  Account Preferences
                </NavLink>
              </li>
              <li>
                <Link to="/" onClick={signOut} className="mr-4">
                  Sign Out
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
