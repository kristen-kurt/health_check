import React from "react";

type HighlightedAreaProps = {
  isSelected: boolean;
  highlightImage: string;
  labelImage?: string;
  position: {
    top: string;
    left: string;
    labelTop?: string;
    labelLeft?: string;
    labelBottom?: string;
  };
  altText?: string;
};

const HighlightedArea = ({
  isSelected,
  highlightImage,
  labelImage,
  position,
  altText,
}: HighlightedAreaProps) => {
  if (!isSelected) return null;

  const customLabelTop =
    altText === "ruq" ? "70px" : position.labelTop || position.top;

  return (
    <>
      <img
        src={highlightImage}
        alt={altText}
        className="absolute"
        style={{ top: position.top, left: position.left }}
      />
      <img
        src={labelImage}
        alt={altText}
        className="absolute"
        style={{
          top: altText === "rlq" ? undefined : customLabelTop,
          left: position.labelLeft || position.left,
          bottom: altText === "rlq" ? "60px" : undefined,
        }}
      />
    </>
  );
};

export default HighlightedArea;
