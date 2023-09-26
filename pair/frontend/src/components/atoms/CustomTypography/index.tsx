import React from "react";
import { SxProps, Typography } from "@mui/material";

export interface TypographyProps {
  variant?: 'heading1'|'heading2'|'subtitle1'|'body1'|'body2'|'caption1'|'caption2';
  style?: React.CSSProperties;
  sx?: SxProps;
  children?: string;
}

const CustomTypography = ({
  variant,
  style,
  sx,
  children,
}: TypographyProps) => {
  return (
    <Typography variant={variant} style={style} sx={sx}>
      {children}
    </Typography>
  );
};

export default CustomTypography;
