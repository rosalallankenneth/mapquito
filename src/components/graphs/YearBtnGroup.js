import React, { useContext } from "react";
import { MapContext } from "../../context/MapContext";

const YearBtnGroup = props => {
  const { refreshMap } = useContext(MapContext);
  const { yearForecast, setYearForecast } = props;
  const years = [2022, 2023, 2024, 2025, 2026];

  const onChangeYear = year => {
    setYearForecast(year);
    refreshMap();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-start absolute top-50 left-0 bg-transparent p-2 text-white z-10">
        <label className="p-1">Forecasted Year:</label>
        <div className="flex flex-row justify-center items-center space-x-1 px-1">
          {years.map(year => (
            <div
              key={year}
              className="flex flex-col justify-center items-center"
            >
              <button
                className={`p-2 text-black font-bold ${
                  yearForecast === year ? "bg-yellow-500" : "bg-yellow-100"
                }`}
                onClick={() => onChangeYear(year)}
              >
                {year}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default YearBtnGroup;
