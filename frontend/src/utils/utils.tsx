import theme from "../theme/theme";
export const getButtonColor = (
  email: string,
  password: string,
  confirmPassword: string
) => {
  const hasErrors =
    email.length === 0 || password.length === 0 || confirmPassword.length === 0;
  const buttonColor = hasErrors
    ? theme.palette.primaryColor[400]
    : theme.palette.primaryColor[500];
  return buttonColor;
};

export const EMAIL_REGEX = /^\w+(?:[.-]\w+)@\w+(?:[.-]\w+)(?:\.\w{2,3})+$/;
export const PASSWORD_REGEX =
  /^(?=.?[A-Z])(?=.?[a-z])(?=.?\d)(?=.?[!@#$%^&*]).{8,}$/;
export const EMAIL="Email"
export const PLACEHOLDER_TEXT="abc@gmail.com"
export const HEADING="Sign Up"
export const PASSWORD="Password"
export const ERROR_MESSAGE="Please enter a valid password"
export const CONFIRM_PASSWORD="Confirm Password"
export const ERROR_MESSAGE_CONFIRM_PASSWORD="Confirm Password does not match with the password"
export const PLACEHOLDER_TEXT_CONFIRM_PASSWORD="Enter your confirm password"
export const TYPOLINK="Already a member? "
export const CONTENT="Please sign up to start exploring the platform"
export const ERROR_MESSAGE_EMAIL="Please enter a valid email"
export const AGREE_CONTENT="I agree to the"
