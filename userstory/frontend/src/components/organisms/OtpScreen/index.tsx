import { Card, Stack, TextField, styled } from "@mui/material";
import { useState } from "react";
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import {
  BUTTON_LABEL,
  OTP_HEADING,
  OTP_PLACEHOLDER,
  OTP_REGEX,
  OTP_SUBHEADING,
  OTP_ValidText,
} from "../../../utils/utils";

const StyleCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  width: "52%",
  margin: "0 auto",
  marginTop: "10%",
  padding: "2%",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
});
const StyleHeading = styled(Typography)({
  textAlign: "center",
  width: "80%",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
});
const StyleTypo = styled(Typography)({
  textAlign: "center",
  color: "#666",
  width: "80%",
});
const StyleTextField = styled(TextField)({
  alignItems: "center",
  width: "80%",
});

const StyleButton = styled(Button)({
  width: "20%",
  textTransform: "none",
  backgroundColor: "#007bff",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#0056b3",
  },
});

const StyleMssg = styled(Typography)({
  color: "green",
  fontSize: "18px",
});

export const OtpScreen = () => {
  const [otp, setOtp] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);

  const handleChange = (newValue: string) => {
    if (OTP_REGEX.test(newValue)) {
      setOtp(newValue);
      setValid(false);
      setErrorMsg(newValue.length === 6 ? "" : `Count should be 6 digits`);
      setDisable(newValue.length !== 6);
    } else {
      setDisable(true);
      setErrorMsg("Invalid format");
    }
  };

  const handleClick = () => {
    setValid(true);
  };
  return (
    <StyleCard>
      <Stack direction="column" spacing={4} alignItems={"center"}>
        <StyleHeading children={OTP_HEADING} variant="heading1" />
        <StyleTypo children={OTP_SUBHEADING} variant="heading2" />
        <TextField
          value={otp}
          placeholder={OTP_PLACEHOLDER}
          type="text"
          error={errorMsg !== ""}
          helperText={errorMsg}
          onChange={(event) => handleChange(event.target.value)}
        />
        {valid && <StyleMssg children={OTP_ValidText} />}
        <StyleButton
          children={BUTTON_LABEL}
          onClick={handleClick}
          variant="contained"
          disabled={disable}
        />
      </Stack>
    </StyleCard>
  );
};
