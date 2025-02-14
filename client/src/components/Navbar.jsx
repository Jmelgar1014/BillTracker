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
      ? "m-2 mr-4 p-3 cursor-pointer  text-navText text-xl hover:border-white  rounded-md font-sans"
      : "m-2 mr-4 p-1 cursor-pointer text-xl text-white  rounded-md hover:border-white hover:text-navText";
  return (
    <>
      <div className="bg-DarkNav h-20 flex items-center justify-between shadow-lg">
        <span className="text-2xl ml-4 text-white">Bill Tracker</span>

        <div className="">
          <nav>
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
                  className="mr-4 text-xl text-white hover:text-navText"
                >
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
