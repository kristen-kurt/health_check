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
          top: position.labelTop || position.top,
          left: position.labelLeft || position.left,
        }}
      />
    </>
  );
};

export default HighlightedArea;
