import React from "react";
import { formatDate } from "../../../utils/GlobalUtils";

/* 
  CASE INFORMATION
  Admitted
  DAdmit
  DOnset
  Type
  LabRes
  CaseClassification
  Outcome
  DateOfEntry
*/
const ModalDetailsCaseInfo = props => {
  const { selectedData } = props;

  const dateAdmitted = formatDate(selectedData.DAdmit);
  const dateOnSet = formatDate(selectedData.DOnset);
  const dateOfEntry = formatDate(selectedData.DateOfEntry);

  return (
    <>
      <div className="flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Date Admitted:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={dateAdmitted}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Date on Set:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={dateOnSet}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Date of Entry:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={dateOfEntry}
            ></input>
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Morbidity Month:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={selectedData.MorbidityMonth}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Morbidity Week:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={selectedData.MorbidityWeek}
            ></input>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Year:</label>
            <input
              className="p-3 rounded-lg font-bold w-full"
              disabled
              value={selectedData.Year}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetailsCaseInfo;
