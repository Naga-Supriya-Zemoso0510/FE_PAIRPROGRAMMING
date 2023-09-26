import styled from "@emotion/styled";
import CustomTypography, {
  TypographyProps,
} from "../../atoms/CustomTypography";
import TextFieldComponent, { TextFieldProps } from "../../atoms/InputField";
import { Stack } from "@mui/material";

const TypoInputStyledComponent = styled(Stack)({
  width: "384px",
  height: "64px",
});

export interface TypoInputProps {
  typographyProps: TypographyProps;
  textFieldProps: TextFieldProps;
}

const TypoInputComponent = ({
  typographyProps,
  textFieldProps,
}: TypoInputProps) => {
  return (
    <TypoInputStyledComponent>
      <CustomTypography {...typographyProps} />
      <TextFieldComponent {...textFieldProps} />
    </TypoInputStyledComponent>
  );
};

export default TypoInputComponent;
