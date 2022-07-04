import React, { useState } from "react";
import Navbar from "./Navbar";
import AnnualTrendChart from "./graphs/AnnualTrendChart";
import AnnualTrendChartMuncity from "./graphs/AnnualTrendChartMonthly";
import Map from "./graphs/Map";
import { MapProvider } from "../context/MapContext";
import YearBtnGroup from "./graphs/YearBtnGroup";
// import annualData from "../data/annualData.json";
// import { forecastCases } from "../utils/GraphUtils";

const Graphs = () => {
  const [yearForecast, setYearForecast] = useState(2022);

  return (
    <>
      <MapProvider>
        <div className="flex flex-col bg-gray-100 min-h-screen w-full">
          <Navbar />
          <div
            className="flex flex-col h-screen w-full"
            // style={{ height: "calc(100% - 64px)" }}
          >
            <div className="flex flex-col justify-start items-start h-full w-full">
              <YearBtnGroup
                yearForecast={yearForecast}
                setYearForecast={setYearForecast}
              />
              <Map
                yearForecast={yearForecast}
                setYearForecast={setYearForecast}
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:space-x-3 space-x-0 md:space-y-0 space-y-3 justify-center items-center p-3">
            <div className="bg-white rounded-lg md:w-1/2 w-full p-3 drop-shadow-md">
              <AnnualTrendChart />
            </div>
            <div className="bg-white rounded-lg md:w-1/2 w-full p-3 drop-shadow-md">
              <AnnualTrendChartMuncity />
            </div>
          </div>
        </div>
      </MapProvider>
    </>
  );
};

export default Graphs;
