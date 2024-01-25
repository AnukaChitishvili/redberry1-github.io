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
    </Container>
  );
};

export default EmployeeInfo;
