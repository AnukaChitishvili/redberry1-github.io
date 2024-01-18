import { useNavigate } from "react-router-dom";

import BackwardButton from "../../components/backward-button/BackwardButton";
import EclipseLogo from "../../components/eclipse-logo/EclipseLogo";
import Title from "../../components/title/Title";
import Form from "./form/laptopForm";

import {
  Container,
  TitleWrapper,
  Wrapper,
  EclipseLogoWrapper,
} from "./laptopInfo.style";

const LaptopInfo = () => {
  const navigate = useNavigate();

  const navigateToEmployeesFormPage = () => {
    navigate("/employee-info");
  };

  return (
    <Container>
      <BackwardButton onClick={navigateToEmployeesFormPage} />
      <TitleWrapper>
        <Title text="ლეპტოპის მახასიათებლები" currentPage="2/2" />
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

export default LaptopInfo;
