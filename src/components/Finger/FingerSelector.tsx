import React from "react";
import { FingerState } from "../../../src/types";
import HighlightedArea from "./HighlightedArea";

interface FingerSelectorProps {
  selectedFinger: FingerState;
  setSelectedFinger: React.Dispatch<React.SetStateAction<FingerState>>;
}
const FingerSelector: React.FC<FingerSelectorProps> = ({
  selectedFinger,
  setSelectedFinger,
}) => {
  const toggleArea = (area: keyof FingerState) => {
    if (area === "selectAll") {
      setSelectedFinger({
        mcp: true,
        dip: true,
        pip: true,
        selectAll: true,
      });
    } else {
      setSelectedFinger((prevState) => ({
        ...prevState,
        [area]: !prevState[area], // Toggle the selected area
        selectAll: false,
      }));
    }
  };
  const baseImage = "/images/default-finger.png";
  const fingerAreas = ["mcp", "dip", "pip", "selectAll"];
  const highlightImages: {
    finger: { [key: string]: string };
  } = {
    finger: {},
  };
  const labels: {
    finger: { [key: string]: string };
  } = {
    finger: {},
  };
  fingerAreas.forEach((fingerArea) => {
    highlightImages.finger[fingerArea] =
      fingerArea === "selectAll"
        ? "/images/others-highlight.png"
        : `/images/${fingerArea}-highlight.png`;
    labels.finger[fingerArea] = selectedFinger.selectAll
      ? ""
      : `/images/${fingerArea}-active.png`;
  });
  return (
    <div className="relative">
      <img
        className="justify-center items-center"
        src={baseImage}
        alt="default-finger"
      />
      {Object.keys(selectedFinger).map((fingerArea) => (
        <HighlightedArea
          key={fingerArea}
          isSelected={selectedFinger[fingerArea as keyof FingerState]}
          highlightImage={highlightImages.finger[fingerArea]}
          labelImage={labels.finger?.[fingerArea]}
          position={{ top: "0", left: "0" }}
          altText={selectedFinger.selectAll ? "" : fingerArea}
        />
      ))}
      <div
        className="clickableArea top-[40.4%] left-[28%] w-8 h-6 md:w-16 md:h-12 transform rotate-[-20deg]"
        onClick={() => toggleArea("mcp")}
      ></div>
      <div
        className="clickableArea top-[37%] left-[36%] w-8 h-6 md:w-16 md:h-12 transform rotate-[-20deg]"
        onClick={() => toggleArea("mcp")}
      ></div>
      <div
        className="clickableArea top-[35%]	left-[44.5%] w-8 h-6 md:w-16 md:h-12 transform rotate-[-1deg]"
        onClick={() => toggleArea("mcp")}
      ></div>
      <div
        className="clickableArea top-[35%]	left-[54%] w-8 h-6 md:w-16 md:h-12 transform rotate-[5deg]"
        onClick={() => toggleArea("mcp")}
      ></div>
      <div
        className="clickableArea top-[52.5%]	left-[68%] w-8 h-6 md:w-16 md:h-12 transform rotate-[45deg]"
        onClick={() => toggleArea("mcp")}
      ></div>
      <div
        className="clickableArea top-[24%]	left-[21%] w-6 h-4 md:w-12 md:h-8 transform rotate-[-20deg]"
        onClick={() => toggleArea("dip")}
      ></div>
      <div
        className="clickableArea top-[13.5%]	left-[33%] w-6 h-4 md:w-12 md:h-8 transform rotate-[-8deg]"
        onClick={() => toggleArea("dip")}
      ></div>
      <div
        className="clickableArea top-[9%] left-[43.5%] w-6 h-4 md:w-12 md:h-8 transform rotate-[-8deg]"
        onClick={() => toggleArea("dip")}
      ></div>
      <div
        className="clickableArea top-[11.5%] left-[55.7%] w-6 h-4 md:w-12 md:h-8 transform rotate-[-2deg]"
        onClick={() => toggleArea("dip")}
      ></div>
      <div
        className="clickableArea top-[31.5%] left-[24%] w-6 h-4 md:w-12 md:h-8 transform rotate-[-20deg]"
        onClick={() => toggleArea("pip")}
      ></div>
      <div
        className="clickableArea top-[23.5%] left-[33%] w-8 h-4 md:w-16 md:h-10 transform rotate-[-12deg]"
        onClick={() => toggleArea("pip")}
      ></div>
      <div
        className="clickableArea top-[19.7%] left-[43.5%] w-8 h-4 md:w-16 md:h-10 transform rotate-[-5deg]"
        onClick={() => toggleArea("pip")}
      ></div>
      <div
        className="clickableArea top-[21%]	left-[55%] w-8 h-4 md:w-16 md:h-10 transform rotate-[-2deg]"
        onClick={() => toggleArea("pip")}
      ></div>
      <div
        className="clickableArea top-[41%]	left-[76.5%] w-6 h-4 md:w-12 md:h-10 transform rotate-[35deg]"
        onClick={() => toggleArea("pip")}
      ></div>
      <div
        className="clickableArea bottom-3 md:bottom-4 left-[14%] w-[70%] h-[8%]"
        onClick={() => toggleArea("selectAll")}
      ></div>
    </div>
  );
};
export default FingerSelector;
