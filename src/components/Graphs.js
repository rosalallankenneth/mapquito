import React, { useContext } from "react";
import Navbar from "./Navbar";
import AnnualTrendChart from "./graphs/AnnualTrendChart";
import AnnualTrendChartMuncity from "./graphs/AnnualTrendChartMonthly";
import Map from "./graphs/Map";
import { MapProvider } from "../context/MapContext";
import { MapContext } from "../context/MapContext";

const Graphs = () => {
  const { refreshMap } = useContext(MapContext);
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
              <div className="flex flex-row justify-center items-center top bottom-0 left-0 bg-black p-5 text-white z-10 w-full space-x-10">
                <div className="flex flex-col justify-center items-center space-y-3">
                  <label>2022</label>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                </div>
                <div className="flex flex-col justify-center items-center space-y-3">
                  <label>2023</label>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                </div>
                <div className="flex flex-col justify-center items-center space-y-3">
                  <label>2024</label>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                </div>
                <div className="flex flex-col justify-center items-center space-y-3">
                  <label>2025</label>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                </div>
                <div className="flex flex-col justify-center items-center space-y-3">
                  <label>2026</label>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                    onChange={refreshMap}
                  />
                </div>
              </div>
              <Map />
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
