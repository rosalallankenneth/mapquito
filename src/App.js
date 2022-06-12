import { Route, Routes } from "react-router-dom";
import HomeMap from "./components/HomeMap";
import Graphs from "./components/Graphs";
import DataTable from "./components/DataTable";
import { MapProvider } from "./context/MapContext";

function App() {
  return (
    <>
      <MapProvider>
        <Routes>
          <Route path="/" element={<HomeMap />} />
          <Route path="graphs" element={<Graphs />} />
          <Route path="datatable" element={<DataTable />} />
        </Routes>
      </MapProvider>
    </>
  );
}

export default App;
