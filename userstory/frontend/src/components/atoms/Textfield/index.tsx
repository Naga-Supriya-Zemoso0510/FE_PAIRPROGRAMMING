import {
  TextField as MuiTextField,
  TextFieldVariants,
  SxProps,
} from "@mui/material";
import { ChangeEvent } from "react";

interface TextFieldProps {
  id?: string;
  label?: string;
  variant?: TextFieldVariants;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  placeholder: string;
  sx: SxProps;
  error?: boolean;
  value?: string;
}

const TextField = ({
  id,
  label,
  placeholder,
  sx,
  variant,
  required,
  onChange,
  helperText,
  error,
  value,
}: TextFieldProps) => {
  return (
    <MuiTextField
      placeholder={placeholder}
      sx={sx}
      id={id}
      label={label}
      variant={variant}
      required={required}
      onChange={onChange}
      helperText={helperText}
      error={error}
      value={value}
    />
  );
};

export default TextField;
