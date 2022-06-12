import React, { useContext } from "react";
import { TableContext } from "../../../context/TableContext";

const ModalDetailsDRU = () => {
  const { addModalData, setAddModalData } = useContext(TableContext);

  return (
    <>
      <div className="flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 w-full">
        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">Disease Reporting Unit (DRU):</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.DRU}
              onChange={e =>
                setAddModalData({ ...addModalData, DRU: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Name:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.NameOfDru}
              onChange={e =>
                setAddModalData({ ...addModalData, NameOfDru: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Address:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.AddressOfDRU}
              onChange={e =>
                setAddModalData({
                  ...addModalData,
                  AddressOfDRU: e.target.value
                })
              }
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-5">
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU City/Municipality:</label>
            <select
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.MuncityOfDRU}
              onChange={e =>
                setAddModalData({
                  ...addModalData,
                  MuncityOfDRU: e.target.value
                })
              }
            >
              <option value="ALORAN">ALORAN</option>
              <option value="BALIANGAO">BALIANGAO</option>
              <option value="BONIFACIO">BONIFACIO</option>
              <option value="CALAMBA">CALAMBA</option>
              <option value="CLARIN">CLARIN</option>
              <option value="CONCEPCION">CONCEPCION</option>
              <option value="DON VICTORIANO CHIONGBIAN">
                DON VICTORIANO CHIONGBIAN
              </option>
              <option value="JIMENEZ">JIMENEZ</option>
              <option value="LOPEZ JAENA">LOPEZ JAENA</option>
              <option value="OROQUIETA CITY">OROQUIETA CITY</option>
              <option value="OZAMIZ CITY">OZAMIZ CITY</option>
              <option value="PANAON">PANAON</option>
              <option value="PLARIDEL">PLARIDEL</option>
              <option value="SAPANG DALAGA">SAPANG DALAGA</option>
              <option value="SINACABAN">SINACABAN</option>
              <option value="TANGUB CITY">TANGUB CITY</option>
              <option value="TUDELA">TUDELA</option>
            </select>
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Province:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.ProvOfDRU}
              disabled
            />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3">
            <label className="text-sm">DRU Region:</label>
            <input
              className="p-3 rounded-lg w-full border-2 border-gray-300"
              value={addModalData.RegionOfDrU}
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetailsDRU;
