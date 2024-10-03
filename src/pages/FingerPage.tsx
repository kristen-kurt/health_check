import React from "react";
import { useNavigate } from "react-router-dom";
import { Bs2CircleFill, BsArrowLeft } from "react-icons/bs";
import FingerSelector from "../components/Finger/FingerSelector";
import { FingerState } from "../../src/types";

const FingerPage: React.FC<{
  selectedFinger: FingerState;
  setSelectedFinger: React.Dispatch<React.SetStateAction<FingerState>>;
}> = ({ selectedFinger, setSelectedFinger }) => {
  const navigate = useNavigate();
  const handlePrevious = () => {
    navigate("/");
  };
  return (
    <div className="min-h-[80vh] md:min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h3 className="text-md md:text-2xl font-normal mb-6 flex items-center">
        <Bs2CircleFill className="mr-2" />
        Select Pain Areas <span className="text-error pl-2"> (Finger)</span>
      </h3>
      <div className="mb-6">
        <FingerSelector
          selectedFinger={selectedFinger}
          setSelectedFinger={setSelectedFinger}
        />
        <div className="flex justify-start items-center mt-10">
          <button
            className="btn btn-primary indicator"
            onClick={handlePrevious}
          >
            <BsArrowLeft /> Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default FingerPage;
