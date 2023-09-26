import React from "react";

export interface ImageProps {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

const ImageComponent: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  style,
}) => {
  return (
    <img src={src} alt={alt} width={width} height={height} style={style} />
  );
};

export default ImageComponent;
