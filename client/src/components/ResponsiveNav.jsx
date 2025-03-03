/* eslint-disable react/prop-types */
import React from "react";
import { NavLink, Link } from "react-router-dom";
import supabase from "../../supaBaseData";
import { useNavigate } from "react-router-dom";
import { is } from "date-fns/locale";
const ResponsiveNav = ({ isOpen }) => {
  const navigate = useNavigate();
  const signOut = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();

    navigate("/login");
  };

  if (!isOpen) return null;
  return (
    <>
      <nav className="flex flex-col items-start p-4 space-y-2 bg-DarkNav">
        <NavLink
          to="/home"
          className="block text-white text-lg hover:text-gray-700"
        >
          Home
        </NavLink>
        <NavLink
          to="/history"
          className="block text-white text-lg hover:text-gray-700"
        >
          History
        </NavLink>
        <NavLink
          to="/"
          className="block text-white text-lg hover:text-gray-700"
        >
          Sign Out
        </NavLink>
      </nav>
    </>
  );
};

export default ResponsiveNav;
