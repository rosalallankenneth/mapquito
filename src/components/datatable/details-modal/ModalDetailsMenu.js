import React from "react";

const ModalDetailsMenu = props => {
  const { activePage, handleMenuClick } = props;

  return (
    <>
      <button
        className={`flex justify-center items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-lg transition-all duration-500 h-12 drop-shadow-lg ${activePage ===
          0 && "flex-1"}`}
        onClick={() => handleMenuClick(0)}
      >
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span
          className={`text-sm font-bold truncate ${
            activePage === 0 ? "sm:block hidden" : "lg:block hidden"
          }`}
        >
          Patient Information
        </span>
      </button>

      <button
        className={`flex justify-center items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-lg transition-all duration-500 h-12 drop-shadow-lg ${activePage ===
          1 && "flex-1"}`}
        onClick={() => handleMenuClick(1)}
      >
        <svg
          className="h-6 w-6 text-white"
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
          <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
        </svg>
        <span
          className={`text-sm font-bold truncate ${
            activePage === 1 ? "sm:block hidden" : "lg:block hidden"
          }`}
        >
          Case Information
        </span>
      </button>
      <button
        className={`flex justify-center items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-lg transition-all duration-500 h-12 drop-shadow-lg ${activePage ===
          2 && "flex-1"}`}
        onClick={() => handleMenuClick(2)}
      >
        <svg
          className="h-6 w-6 text-white"
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
          <line x1="3" y1="21" x2="21" y2="21" />{" "}
          <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />{" "}
          <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />{" "}
          <line x1="10" y1="9" x2="14" y2="9" />{" "}
          <line x1="12" y1="7" x2="12" y2="11" />
        </svg>
        <span
          className={`text-sm font-bold truncate ${
            activePage === 2 ? "sm:block hidden" : "lg:block hidden"
          }`}
        >
          DRU Information
        </span>
      </button>
    </>
  );
};

export default ModalDetailsMenu;
