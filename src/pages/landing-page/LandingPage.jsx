import { useNavigate } from "react-router-dom";

import {
  Container,
  StyledLink,
  LandingImage,
  MobileLandingImage,
  ButtonContainer,
  ButtonWrapper,
} from "./landingPage.style";
import Button from "../../components/button/Button";
import LandingImg from "../../assets/imgs/Landing-img.svg";
import MobileLandingImg from "../../assets/imgs/Mobile-landing-img.svg";
import LogoIcon from "../../assets/icons/Logo.svg";

const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToEmployeeFormPage = () => {
    navigate("/employee-info");
  };

  const navigateToLaptopListPage = () => {
    navigate("/laptop-list");
  };

  return (
    <Container>
      <StyledLink>
        <img src={LogoIcon} alt="logo" />
      </StyledLink>
      <LandingImage src={LandingImg} alt="landing" />
      <MobileLandingImage src={MobileLandingImg} alt="landing" />
      <ButtonContainer>
        <ButtonWrapper>
          <Button
            text="ჩანაწერის დამატება"
            onClick={navigateToEmployeeFormPage}
            isLanding
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            text="ჩანაწერების სია"
            onClick={navigateToLaptopListPage}
            isLanding
          />
        </ButtonWrapper>
      </ButtonContainer>
    </Container>
  );
};

export default LandingPage;
