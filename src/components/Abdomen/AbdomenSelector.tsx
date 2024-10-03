import React from "react";
import HighlightedArea from "./HighlightedArea";
import { AbdomenState } from "../../../src/types";

interface AbdomenSelectorProps {
  selectedAbdomen: AbdomenState;
  setSelectedAbdomen: React.Dispatch<React.SetStateAction<AbdomenState>>;
}
const AbdomenSelector: React.FC<AbdomenSelectorProps> = ({
  selectedAbdomen,
  setSelectedAbdomen,
}) => {
  const toggleArea = (area: keyof AbdomenState) => {
    if (area === "selectAll") {
      setSelectedAbdomen({
        umbilicus: true,
        suprapubic: true,
        ruq: true,
        rlq: true,
        luq: true,
        llq: true,
        epigastrium: true,
        selectAll: true,
      });
    } else {
      setSelectedAbdomen((prevState) => ({
        ...prevState,
        [area]: !prevState[area],
        selectAll: false,
      }));
    }
  };
  const baseImage = "/images/default-abdomen.png";
  const abdomenAreas = [
    "umbilicus",
    "suprapubic",
    "ruq",
    "rlq",
    "luq",
    "llq",
    "epigastrium",
    "selectAll",
  ];
  const highlightImages: {
    abdomen: { [key: string]: string };
  } = {
    abdomen: {},
  };
  const labels: {
    abdomen: { [key: string]: string };
  } = {
    abdomen: {},
  };
  abdomenAreas.forEach((abdomenArea) => {
    highlightImages.abdomen[abdomenArea] =
      abdomenArea === "selectAll"
        ? "/images/all-over-highlight.png"
        : `/images/${abdomenArea}-highlight.png`;
    labels.abdomen[abdomenArea] = selectedAbdomen.selectAll
      ? ""
      : `/images/${abdomenArea}-active.png`;
  });
  return (
    <div className="relative">
      <img
        className="justify-center items-center"
        src={baseImage}
        alt="default-abs"
      />
      {Object.keys(selectedAbdomen).map((abdomenArea) => (
        <HighlightedArea
          key={abdomenArea}
          isSelected={selectedAbdomen[abdomenArea as keyof AbdomenState]}
          highlightImage={highlightImages.abdomen[abdomenArea]}
          labelImage={labels.abdomen?.[abdomenArea]}
          position={{ top: "0", left: "0" }}
          altText={selectedAbdomen.selectAll ? "" : abdomenArea}
        />
      ))}
      <div
        className="clickableArea top-[49%]	left-[43.5%] w-10 h-10 md:w-20 md:h-20"
        onClick={() => toggleArea("umbilicus")}
      ></div>
      <div
        className="clickableArea top-[59%]	left-[42.5%] w-10 h-10 md:w-24 md:h-24"
        onClick={() => toggleArea("suprapubic")}
      ></div>
      <div
        className="clickableArea top-[42.5%]	left-[33%] w-10 h-10 md:w-24 md:h-24"
        onClick={() => toggleArea("ruq")}
      ></div>
      <div
        className="clickableArea top-[53.5%]	left-[32%]  w-10 h-10 md:w-24 md:h-24"
        onClick={() => toggleArea("rlq")}
        // style={{ border: "1px solid red", opacity: 1 }}
      ></div>
      <div
        className="clickableArea top-[42.5%]	left-[52%] w-10 h-10 md:w-24 md:h-24"
        onClick={() => toggleArea("luq")}
      ></div>
      <div
        className="clickableArea top-[53.5%]	left-[52.5%] w-10 h-10 md:w-24 md:h-24"
        onClick={() => toggleArea("llq")}
      ></div>
      <div
        className="clickableArea top-[36%]	left-[42.5%] w-10 h-10 md:w-24 md:h-24"
        onClick={() => toggleArea("epigastrium")}
      ></div>
      <div
        className="clickableArea bottom-4 md:bottom-10	left-[32.5%] w-32 h-10 md:w-64 md:h-20"
        onClick={() => toggleArea("selectAll")}
      ></div>
    </div>
  );
};
export default AbdomenSelector;
