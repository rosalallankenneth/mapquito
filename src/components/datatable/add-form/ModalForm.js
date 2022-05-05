import React, { useState, useContext } from "react";
import ModalDetailsPatientInfo from "./ModalFormPatientInfo";
import ModalDetailsCaseInfo from "./ModalFormCaseInfo";
import ModalDetailsDRU from "./ModalFormDRU";
import ModalDetailsOtherInfo from "./ModalFormOtherInfo";
import ModalDetailsMenu from "./ModalFormMenu";
import { TableContext } from "../../../context/TableContext";
import { reviewData } from "../../../utils/TableUtils";
import { createCaseDB } from "../../../utils/GlobalUtils";
import { GlobalContext } from "../../../context/GlobalContext";

const ModalForm = props => {
  const { open, handleClose } = props;
  const { refreshDbData } = useContext(GlobalContext);
  const { addModalData, setAddModalData, resetModalData } = useContext(
    TableContext
  );
  const [activePage, setActivePage] = useState(0);
  const [error, setError] = useState(false);

  const handleMenuClick = pageNum => {
    setActivePage(pageNum);
  };

  const handleReview = () => {
    const validate = reviewData(addModalData);
    if (validate) {
      let msg = "Please fill in the following missing fields:\r\n";
      validate.forEach(i => (msg += i + "\r\n"));
      alert(msg);
    } else {
      let msg =
        "Make sure to review all the information before submitting. Confirm submission of new record?";
      if (window.confirm(msg)) {
        createCaseDB(addModalData, setError);
        refreshDbData();
        resetModalData();
        handleClose();
        console.log(error);
      }
    }
  };

  return (
    <>
      <div
        className="fixed left-0 top-0 bg-white w-screen z-20 p-5 overflow-y-scroll"
        style={{
          height: "calc(100% - 64px)",
          top: 64,
          display: open ? "block" : "none"
        }}
      >
        <div className="flex flex-col justify-start items-start bg-white w-full space-y-5">
          <div className="flex justify-between items-center space-x-3 w-full">
            <div className="flex-1 flex space-x-3 justify-start items-center md:text-md text-sm font-bold">
              <label className="text-gray-900">EPID: </label>
              <input
                className="text-green-700 border-2 border-gray-300 rounded p-2 w-full truncate overflow-hidden text-ellipsis"
                type="text"
                value={addModalData.EPIID}
                onChange={e =>
                  setAddModalData({ ...addModalData, EPIID: e.target.value })
                }
                autoFocus
              />
            </div>
            <button onClick={handleReview}>
              <svg
                className="h-8 w-8 text-green-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <polyline points="9 11 12 14 22 4" />{" "}
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </button>
            <button
              onClick={() => {
                handleClose();
                setActivePage(0);
              }}
            >
              <svg
                className="h-8 w-8 text-red-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{" "}
                <line x1="9" y1="9" x2="15" y2="15" />{" "}
                <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
            </button>
          </div>

          <div className="flex justify-between items-center space-x-3 w-full">
            <ModalDetailsMenu
              activePage={activePage}
              handleMenuClick={handleMenuClick}
            />
          </div>

          <div className="w-full border-t-2 py-5 border-gray-100">
            {activePage === 0 && <ModalDetailsPatientInfo open={open} />}
            {activePage === 1 && <ModalDetailsCaseInfo />}
            {activePage === 2 && <ModalDetailsDRU />}
            {activePage === 3 && <ModalDetailsOtherInfo />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
