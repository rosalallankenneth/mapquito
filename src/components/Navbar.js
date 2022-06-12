import React, { useState, useEffect } from "react";
import NavbarLogo from "../assets/mapquito-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [windowX, setWindowX] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowX(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return <>{windowX < 768 ? <NavbarMobile /> : <NavbarMain />}</>;
};

// navbar menu for large screen devices
export const NavbarMain = () => {
  return (
    <div
      className="flex justify-between items-center bg-gray-900 md:px-5 px-3 py-4 w-full"
      style={{ height: 64 }}
    >
      <img src={NavbarLogo} className="w-36" alt="Navbar Logo" />
      <nav className="flex justify-end items-center text-gray-100">
        <Link
          to="/"
          className="px-5 py-2 hover:bg-gray-800 bg-transparent rounded"
        >
          Map
        </Link>
        <Link
          to="/graphs"
          className="px-5 py-2 hover:bg-gray-800 bg-transparent rounded"
        >
          Forecasting
        </Link>
        <Link
          to="/datatable"
          className="px-5 py-2 hover:bg-gray-800 bg-transparent rounded"
        >
          Data Table
        </Link>
      </nav>
    </div>
  );
};

// navbar menu for mobile devices
export const NavbarMobile = () => {
  const [ifNavOpen, setIfNavOpen] = useState(false);

  const toggleOpenNav = () => {
    setIfNavOpen(!ifNavOpen);
  };
  return (
    <>
      <div
        className="flex justify-between items-center bg-gray-900 md:px-5 px-3 py-4 w-full z-40"
        style={{ height: 64 }}
      >
        <img src={NavbarLogo} className="w-36" alt="Navbar Logo" />
        <button onClick={toggleOpenNav}>
          {ifNavOpen ? (
            <svg
              className="h-8 w-8 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="18" y1="6" x2="6" y2="18" />{" "}
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      <nav
        className="flex flex-col space-y-2 justify-end fixed top-0 left-0 bg-gray-900 text-gray-100 border-t-2 border-gray-700 w-full h-auto p-3 z-30 transition-all ease-in-out duration-300 rounded-b-lg z-10"
        style={{
          transform: ifNavOpen ? "translateY(64px)" : "translateY(-100%)"
        }}
      >
        <Link
          to="/"
          className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded"
        >
          Map
        </Link>
        <Link
          to="/graphs"
          className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded"
        >
          Forecasting
        </Link>
        <Link
          to="/datatable"
          className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded"
        >
          Data Table
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
