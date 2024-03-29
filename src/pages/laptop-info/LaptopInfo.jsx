import { useNavigate } from "react-router-dom";

import BackwardButton from "../../components/backward-button/BackwardButton";
import EclipseLogo from "../../components/eclipse-logo/EclipseLogo";
import Title from "../../components/title/Title";
import LaptopForm from "./laptop-form/LaptopForm";

import {
  Container,
  TitleWrapper,
  Wrapper,
  EclipseLogoWrapper,
} from "./laptopInfo.style";

const LaptopBriefData = () => {
  const navigate = useNavigate();

  const navigateToEmployeesFormPage = () => {
    navigate("/new-laptop/employee-info");
  };

  return (
    <Container>
      <BackwardButton onClick={navigateToEmployeesFormPage} />
      <TitleWrapper>
        <Title text="ლეპტოპის მახასიათებლები" currentPage="2/2" />
      </TitleWrapper>
      <Wrapper>
        <LaptopForm />
        <EclipseLogoWrapper>
          <EclipseLogo />
        </EclipseLogoWrapper>
      </Wrapper>
    </Container>
  );
};

export default LaptopBriefData;
