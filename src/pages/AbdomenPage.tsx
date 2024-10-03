import React from "react";
import { useNavigate } from "react-router-dom";
import { Bs1CircleFill, BsArrowRight } from "react-icons/bs";
import AbdomenSelector from "../components/Abdomen/AbdomenSelector";
import { AbdomenState } from "../../src/types";

const AbdomenPage: React.FC<{
  selectedAbdomen: AbdomenState;
  setSelectedAbdomen: React.Dispatch<React.SetStateAction<AbdomenState>>;
}> = ({ selectedAbdomen, setSelectedAbdomen }) => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/finger");
  };
  return (
    <div className="min-h-[80vh] md:min-h-screen  bg-gray-100 flex flex-col items-center justify-center">
      <h3 className="text-md md:text-2xl  font-normal mb-6 flex items-center">
        <Bs1CircleFill className="mr-2" />
        Select Pain Areas <span className="text-error pl-2"> (Abdomen)</span>
      </h3>
      <div className="mb-6">
        <AbdomenSelector
          selectedAbdomen={selectedAbdomen}
          setSelectedAbdomen={setSelectedAbdomen}
        />
        <div className="flex justify-end items-center mt-10">
          <button className="btn btn-primary indicator" onClick={handleNext}>
            Next <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AbdomenPage;
