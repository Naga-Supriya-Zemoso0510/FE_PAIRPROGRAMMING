import {
  InputProps,
  SxProps,
  TextField,
  TextFieldVariants,
} from "@mui/material";
import { ChangeEvent } from "react";

export interface TextFieldProps {
  id?: string;
  label?: string;
  variant?: TextFieldVariants;
  required?: boolean;
  onchange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  inputProps?: InputProps;
  sx?: SxProps;
  type?: "text" | "email" | "password" | "number" | "date";
  style?: React.CSSProperties;
  error?: boolean;
  helperText?: string;
}

const TextFieldComponent: React.FC<TextFieldProps> = ({
  id,
  label,
  required,
  onchange,
  variant,
  placeholder,
  inputProps,
  sx,
  type,
  style,
  error,
  helperText,
}) => {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      required={required}
      onChange={onchange}
      error={error}
      helperText={helperText}
      placeholder={placeholder}
      InputProps={inputProps}
      sx={sx}
      type={type}
      InputLabelProps={{
        shrink: true,
      }}
      style={style}
    />
  );
};

export default TextFieldComponent;
