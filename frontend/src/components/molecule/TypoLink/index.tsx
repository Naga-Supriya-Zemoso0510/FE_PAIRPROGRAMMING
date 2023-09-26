import React from "react";

import styled from "@emotion/styled";
import ButtonLink from "../../atoms/Link";
import { SxProps } from "@mui/material";
import theme from "../../../theme/theme";

const Container = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap:`${theme.spacing(1)}`
});

export interface DataProps {
  childrenFirst?: string;
  variantFirst?:
    | "heading1"
    | "heading2"
    | "subtitle1"
    | "body1"
    | "body2"
    | "caption1"
    | "caption2";
  styleFirst?: React.CSSProperties;
  sxFirst?: SxProps;
  underlineFirst?: "none" | "hover" | "always";
  onClickFirst?: () => void;

  childrenSecond?: string;
  variantSecond?:
    | "heading1"
    | "heading2"
    | "subtitle1"
    | "body1"
    | "body2"
    | "caption1"
    | "caption2";
  styleSecond?: React.CSSProperties;
  sxSecond?: SxProps;
  underlineSecond?: "none" | "hover" | "always";
  onClickSecond?: () => void;
}

const TypoLink = (props: DataProps) => {
  return (
    <Container>
      <ButtonLink
        variant={props.variantFirst}
        underline={props.underlineFirst}
        sx={props.sxFirst}
        style={props.styleFirst}
        onClick={props.onClickFirst}
      >
        {props.childrenFirst}
      </ButtonLink>

      <ButtonLink
        variant={props.variantSecond}
        underline={props.underlineSecond}
        sx={props.sxSecond}
        style={props.styleSecond}
        onClick={props.onClickSecond}
      >
        {props.childrenSecond}
      </ButtonLink>
    </Container>
  );
};

export default TypoLink;
