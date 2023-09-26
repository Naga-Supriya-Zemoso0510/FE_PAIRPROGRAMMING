import SignInTemplate from "../../components/template/SignInTemplate";

import PrivacyPolicyImage from "../../../public/assets/images/policy-pana.svg";
import ImageComponent from "../../components/atoms/Image";
import SignUp from "../../components/organism/SignUp";

const LeftImage = () => (
  <ImageComponent src={PrivacyPolicyImage} alt={"PrivacyImg"} />
);

const SignUpPage = () => {
  return (
    <>
      <SignInTemplate leftImage={<LeftImage />} children={<SignUp />} />
    </>
  );
};

export default SignUpPage;
