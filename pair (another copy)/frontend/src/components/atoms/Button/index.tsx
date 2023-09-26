import React from "react";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/material";
import styled from "@emotion/styled";

export interface ButtonAtomProps {
  buttonVariant?: "contained" | "outlined" | "text";
  buttonTextColor?: string;
  buttonText: string;
  backgroundColor?: string;
  buttonIcon?: React.ReactNode;
  buttonBorder?: string;
  bordeRadius?: number;
  sx?: SxProps;
  onClick?: () => void;
  disabled?:boolean;
  buttonWidth?:string;
  buttonHeight?:string;
}

const ButtonAtom = ({
  buttonVariant,
  buttonTextColor,
  buttonText,
  buttonIcon,
  backgroundColor,
  buttonBorder,
  bordeRadius,
  sx,
  disabled,
  onClick,
  buttonWidth,
  buttonHeight
}: ButtonAtomProps) => {
  const StyledButton = styled(Button)`
    && {
      background-color: ${backgroundColor};
      color: ${buttonTextColor};
      border-radius: ${bordeRadius}px;
      border: ${buttonBorder};
      text-transform: none;
      box-shadow: none;

      width: ${buttonWidth ?? "auto"};
      height: ${buttonHeight ?? "auto"};

      &:hover {
        background-color: ${backgroundColor};
      }
    }
  `;

  return (
      <StyledButton
        variant={buttonVariant}
        startIcon={buttonIcon}
        onClick={onClick}
        sx={sx}
        disabled={disabled}
      >
        {buttonText}
      </StyledButton>
  );
};

export default ButtonAtom;

