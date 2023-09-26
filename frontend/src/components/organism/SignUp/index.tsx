import { useState, ChangeEvent } from "react";
import CustomTypography from "../../atoms/CustomTypography";
import TypoInputComponent from "../../molecule/TypoInput";
import ButtonAtom from "../../atoms/Button";
import TypoLink from "../../molecule/TypoLink";
import theme from "../../../theme/theme";

import styled from "@emotion/styled";
import { Paper, IconButton } from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import {

  AGREE_CONTENT,
  CONFIRM_PASSWORD,
  CONTENT,
  EMAIL,
  EMAIL_REGEX,
  ERROR_MESSAGE,
  ERROR_MESSAGE_CONFIRM_PASSWORD,
  ERROR_MESSAGE_EMAIL,
  HEADING,
  PASSWORD,
  PASSWORD_REGEX,
  PLACEHOLDER_TEXT_CONFIRM_PASSWORD,
  TYPOLINK,
  getButtonColor,

} from "../../../utils/utils";

const MainContainer = styled(Paper)({
  display: "flex",
  flexDirection: "column",

  width: theme.spacing(120),
  height: theme.spacing(168),
});

const SecondaryContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginLeft: theme.spacing(12),
  marginBottom: theme.spacing(1.75),
});

const TypoBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: theme.spacing(13.5),

  marginBottom: theme.spacing(3.75),
  columnGap: theme.spacing(3.75),

  width: theme.spacing(96),
});

const AllInputBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6.25),

  width: theme.spacing(96),
});

const CheckBoxStyle = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginLeft: theme.spacing(9.25),
  marginBottom: theme.spacing(3.75),
});

const InputBox = styled("div")({
  display: "flex",
  marginBottom: theme.spacing(3.75),
});

const SignUpBtnStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  gap: theme.spacing(6.25),
  marginLeft: theme.spacing(12),
  marginBottom: theme.spacing(6.75),
  width: theme.spacing(96),
});

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>();
  const [passwordError, setPasswordError] = useState<boolean>();
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>();

  const handleSubmit = () => {
    setEmailError(!EMAIL_REGEX.test(email));
    setPasswordError(!PASSWORD_REGEX.test(password));
    setConfirmPasswordError(confirmPassword !== password);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };
  const btnShow =
    email.length === 0 || password.length === 0 || confirmPassword.length === 0;

  return (
    <MainContainer>
      <SecondaryContainer>
        <TypoBox>
          <CustomTypography
            children={HEADING}
            variant="heading1"
            sx={{
              color: theme.palette.textColor.highemp,
              marginBottom: theme.spacing(3.75),
            }}
          />
          <CustomTypography
            children={CONTENT}
            variant="body2"
            sx={{ color: theme.palette.textColor.medemp }}
          />
        </TypoBox>

        <AllInputBox>
          <InputBox>
            <TypoInputComponent
              typographyProps={{
                sx: {
                  fontFamily: theme.typography.caption,
                  color: theme.palette.textColor.medemp,
                },
                children: EMAIL,
              }}
              textFieldProps={{
                placeholder: "abc@gmail.com",
                type: "email",
                inputProps: {
                  style: {
                    height: "36px",
                  },
                },
                style: {
                  borderColor: theme.palette.greyColor.stroke,
                  border: theme.spacing(0.25),
                  width: theme.spacing(96.25),
                  color: theme.palette.textColor.medemp,
                  top: theme.spacing(3.75),
                  borderRadius: theme.spacing(1),
                },
                onchange: handleEmailChange,
                error: emailError,
                helperText: emailError ? ERROR_MESSAGE_EMAIL : "",
              }}
            />
          </InputBox>
          <InputBox>
            <TypoInputComponent
              typographyProps={{
                children: "Password",
                sx: {
                  color: theme.palette.textColor.medemp,
                  fontFamily: theme.typography.caption,
                },
              }}
              textFieldProps={{
                type: showPassword ? "text" : "password",
                placeholder: PASSWORD,
                inputProps: {
                  endAdornment: (
                    <IconButton onClick={handleTogglePassword}>
                      {showPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  ),
                  style: {
                    height: theme.spacing(9),
                  },
                },
                onchange: handlePasswordChange,
                error: passwordError,
                helperText: passwordError
                  ? ERROR_MESSAGE
                  : "",
                style: {
                  borderColor: theme.palette.greyColor.stroke,
                  width: theme.spacing(96.25),
                  border: theme.spacing(0.25),
                  top: theme.spacing(3.75),
                  color: theme.palette.greyColor.stroke,
                  borderRadius: theme.spacing(1),
                },
              }}
            />
          </InputBox>
          <InputBox>
            <TypoInputComponent
              typographyProps={{
                children: CONFIRM_PASSWORD,
                sx: {
                  color: theme.palette.textColor.medemp,
                  fontFamily: theme.typography.caption,
                },
              }}
              textFieldProps={{
                type: showPassword2 ? "text" : "password",
                placeholder: PLACEHOLDER_TEXT_CONFIRM_PASSWORD,
                inputProps: {
                  endAdornment: (
                    <IconButton onClick={handleTogglePassword2}>
                      {showPassword2 ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  ),
                  style: {
                    height: theme.spacing(9),
                  },
                },
                onchange: handleConfirmPasswordChange,
                error: confirmPasswordError,
                helperText: confirmPasswordError
                  ? ERROR_MESSAGE_CONFIRM_PASSWORD
                  : "",
                style: {
                  borderRadius: theme.spacing(1),
                  borderColor: theme.palette.greyColor.stroke,
                  border: theme.spacing(0.25),
                  width: theme.spacing(96.25),
                  color: theme.palette.greyColor.stroke,
                  top: theme.spacing(3.75),
                },
              }}
            />
          </InputBox>
        </AllInputBox>
      </SecondaryContainer>
      <CheckBoxStyle>
        <Checkbox sx={{ color: theme.palette.greyColor.stroke }} />
        <CustomTypography
          children={AGREE_CONTENT}
          variant="body2"
          sx={{ color: theme.palette.textColor.medemp }}
        />
        <CustomTypography
          children="Privacy Policy"
          variant="body2"
          sx={{
            color: theme.palette.primaryColor[500],
            marginLeft: theme.spacing(1.25),
          }}
        />
      </CheckBoxStyle>
      <SignUpBtnStyle>
        <ButtonAtom
          buttonVariant="contained"
          buttonTextColor={theme.palette.greyColor.white}
          buttonText={HEADING}
          backgroundColor={getButtonColor(email, password, confirmPassword)}
          sx={{
            padding: `${theme.spacing(2)} ${theme.spacing(4)} ${theme.spacing(
              2
            )} ${theme.spacing(4)}`,
          }}
          bordeRadius={4}
          disabled={btnShow}
          buttonWidth={theme.spacing(96)}
          buttonHeight={theme.spacing(11)}
          onClick={handleSubmit}
        />
      </SignUpBtnStyle>

      <Box marginLeft={theme.spacing(36.5)}>
        <TypoLink
          childrenFirst={TYPOLINK}
          variantFirst="body2"
          styleFirst={{ color: theme.palette.textColor.medemp }}
          underlineFirst="none"
          childrenSecond="Sign in"
          variantSecond="body1"
          styleSecond={{ color: theme.palette.primaryColor[500] }}
          underlineSecond="none"
        />
      </Box>
    </MainContainer>
  );
};

export default SignUp;
