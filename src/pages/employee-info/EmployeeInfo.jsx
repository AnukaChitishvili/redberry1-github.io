import { useNavigate } from "react-router-dom";

import Title from "../../components/title/Title";
import BackwardButton from "../../components/backward-button/BackwardButton";
import Form from "./employee-form/EmployeeForm";
import EclipseLogo from "../../components/eclipse-logo/EclipseLogo";

import {
  Container,
  Wrapper,
  TitleWrapper,
  EclipseLogoWrapper,
} from "./employeeInfo.style";
//
// import TestSelectinput from "../../components/testSelectinput";
// import GetImage from "../../getImage";

const EmployeeInfo = () => {
  const navigate = useNavigate();

  const navigateToLandingPage = () => {
    navigate("/");
  };

  return (
    <Container>
      <BackwardButton onClick={navigateToLandingPage} />
      <TitleWrapper>
        <Title text="თანამშრომლის ინფო" currentPage="1/2" isFirstPage />
      </TitleWrapper>
      <Wrapper>
        <Form />
        <EclipseLogoWrapper>
          <EclipseLogo />
        </EclipseLogoWrapper>
      </Wrapper>
      {/* <TestSelectinput />
      <GetImage /> */}
    </Container>
  );
};

export default EmployeeInfo;
