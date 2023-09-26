/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Link from '@mui/material/Link';
import {  SxProps } from "@mui/material";


export interface LinkProp{
  
  children?:string;
  style?: React.CSSProperties;
  sx?:SxProps;
  underline?:'none'|'hover'|'always';
  onClick?:() => void;
  variant?: 'heading1'|'heading2'|'subtitle1'|'body1'|'body2'|'caption1'|'caption2';
}

export default function ButtonLink(props:LinkProp) {

  return (
    <Link
      component='button'
      variant={props.variant}
      underline={props.underline}
      onClick={props.onClick}
      style={props.style}
      sx={props.sx}
    >
     {props.children}
    </Link>
  );
}