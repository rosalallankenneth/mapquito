import React, { useState, useContext } from "react";
import UploadArea from "./UploadArea";
import FileActions from "./FileActions";
import { createCaseDB } from "../../../utils/GlobalUtils";
import { GlobalContext } from "../../../context/GlobalContext";

const saveRecords = (csvData, dataAttr, setCreateError, refreshDbData) => {
  csvData.forEach(d => {
    if (d.length === dataAttr.length) {
      const item = {};
      for (let i = 2; i < dataAttr.length; i++) {
        if (
          dataAttr[i] === "DateOfEntry" ||
          dataAttr[i] === "DAdmit" ||
          dataAttr[i] === "DOnset"
        ) {
          const fd = d[i].split("/");
          item[dataAttr[i]] = fd[2] + "-" + fd[0] + "-" + fd[1];
        } else {
          item[dataAttr[i]] = d[i];
        }
      }
      createCaseDB({ ...item, Lat: 0, Lng: 0 }, setCreateError);
    }
  });
  refreshDbData();
};

const ModalUploadCSV = props => {
  const { uploadModalOpen, handleUploadClose } = props;
  const { refreshDbData } = useContext(GlobalContext);
  const [csvResults, setCsvResults] = useState(null);
  const [createError, setCreateError] = useState(false);
  const handleSaveBtn = () => {
    if (csvResults) {
      saveRecords(
        [...csvResults.data].splice(1, csvResults.data.length - 1),
        csvResults.data[0],
        setCreateError,
        refreshDbData
      );

      if (createError) {
        alert("Unable to save records from CSV. Please try again.");
      } else {
        alert("New records are saved successfully");
        handleUploadClose();
        setCsvResults(null);
      }
    } else {
      alert("Please upload your CSV file.");
    }
  };

  return (
    <>
      <div
        className="flex flex-col space-y-5 bg-white w-full h-screen fixed top-0 left-0 z-40 overflow-y-scroll p-5"
        style={{ display: uploadModalOpen ? "block" : "none" }}
      >
        <div className="flex w-full space-x-3 md:container md:mx-auto">
          <div className="flex-1">
            <UploadArea setCsvResults={setCsvResults} />
          </div>
          <div className="flex flex-col space-y-3">
            <button
              className="flex justify-start items-center space-x-3 p-3 bg-green-600 rounded-lg text-white"
              onClick={handleSaveBtn}
            >
              <svg
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>Confirm and Save</span>
            </button>
            <button
              className="flex justify-start items-center space-x-3 p-3 bg-gray-600 rounded-lg text-white"
              onClick={() => {
                handleUploadClose();
                setCsvResults(null);
              }}
            >
              <svg
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <circle cx="12" cy="12" r="10" />{" "}
                <line x1="15" y1="9" x2="9" y2="15" />{" "}
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>

              <span>Cancel and Discard</span>
            </button>
          </div>
        </div>
        <hr />
        {csvResults ? (
          <>
            <div className="flex justify-start items-center w-full">
              <label className="border-l-2 border-gray-100 px-3">
                {csvResults.data.length - 2} total records
              </label>
              <label className="border-l-2 border-gray-100 px-3">
                {csvResults.errors.length} parsing errors
              </label>
            </div>

            <div className="w-full overflow-x-scroll">
              <table>
                <thead>
                  <tr className="border-y-2 border-gray-100 text-xs">
                    {csvResults.data[0].map(d => (
                      <th key={d} className="p-1 border-x-2 border-gray-100">
                        {d}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...csvResults.data]
                    .splice(1, csvResults.data.length - 1)
                    .map(d => (
                      <tr
                        key={Math.random()}
                        className="border-b-2 border-gray-100 text-xs"
                      >
                        {d.map(attr => (
                          <td
                            key={Math.random()}
                            className="p-1 border-x-2 border-gray-100"
                          >
                            {attr}
                          </td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <FileActions />
        )}
      </div>
    </>
  );
};

export default ModalUploadCSV;
