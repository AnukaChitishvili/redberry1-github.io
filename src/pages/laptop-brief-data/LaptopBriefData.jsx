// import { useNavigate } from "react-router-dom";
import ComputerImg from "../../assets/imgs/Computer.svg";

import {
  Container,
  Img,
  InfoWrapper,
  Title,
  SubTitle,
  StyledLink,
} from "./laptopBriefData.style";

const LaptopBriefData = () => {
  // should be from back dynamic
  // useContext

  return (
    <Container>
      <Img src={ComputerImg} alt="computer" />
      <InfoWrapper>
        <Title>ირინე ჩანქსელიანი</Title>
        <SubTitle>Pentium II</SubTitle>
        <StyledLink to="/laptop-data">მეტის ნახვა</StyledLink>
      </InfoWrapper>
    </Container>
  );
};

export default LaptopBriefData;
