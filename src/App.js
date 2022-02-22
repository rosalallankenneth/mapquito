import { useState } from "react";
import Map from "./components/Map";
import InfoSection from "./components/InfoSection";
import NavbarLogo from "./assets/mapquito-logo.png";
import MapControls from "./components/MapControls";

function App() {
  const [municity, setMunicity] = useState("Ozamiz");
  const [province, setProvince] = useState("Misamis Occidental");
  const [year, setYear] = useState("All");

  return (
    <>
      <div className="flex flex-col justify-start items-start bg-gray-100 h-screen w-full">
        <div className="bg-gray-900 md:px-5 px-3 py-4 w-full border-b-2 border-gray-200">
          <img src={NavbarLogo} className="w-36" alt="Navbar Logo" />
        </div>
        <div className="flex-1 flex md:flex-row flex-col justify-start items-start h-full w-full p-3 md:container md:mx-auto">
          <div className="relative bg-white md:h-full h-500 md:w-1/2 w-full rounded-t-xl rounded-b-none md:rounded-l-xl md:rounded-r-none border-2 border-gray-200 overflow-hidden">
            <Map setMunicity={setMunicity} setProvince={setProvince} />
            <MapControls year={year} setYear={setYear} />
          </div>
          <div className="flex flex-col bg-white h-full md:w-1/2 w-full rounded-b-xl rounded-t-none md:rounded-r-xl md:rounded-l-none border-2 border-gray-200 p-3 md:overflow-y-scroll overflow-auto">
            <InfoSection
              location={{
                municity,
                province
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
