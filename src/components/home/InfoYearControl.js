import React, { useContext } from "react";
import { MapContext } from "../../context/MapContext";

const InfoSectionYearControl = () => {
  const { year, setYear, refreshMap } = useContext(MapContext);

  return (
    <>
      <div className="flex justify-start items-center bg-gray-800 rounded-lg drop-shadow">
        <div className="p-3 border-r-2 border-gray-600">
          <svg
            className="h-8 w-8 text-gray-100"
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
            <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
            <line x1="16" y1="3" x2="16" y2="7" />{" "}
            <line x1="8" y1="3" x2="8" y2="7" />{" "}
            <line x1="4" y1="11" x2="20" y2="11" />{" "}
            <line x1="11" y1="15" x2="12" y2="15" />{" "}
            <line x1="12" y1="15" x2="12" y2="18" />
          </svg>
        </div>
        <select
          id="year"
          className="flex-1 p-3 bg-gray-800 text-gray-100 font-bold cursor-pointer outline-none"
          value={year}
          onChange={e => {
            setYear(e.target.value);
            refreshMap();
          }}
        >
          <option value="All">2014 to Current</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </>
  );
};

export default InfoSectionYearControl;
