// import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { DataContext } from "../../context/dataContext";
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
  const { laptopList } = useContext(DataContext);

  return (
    <div>
      {laptopList.map((item) => {
        return (
          <Container>
            <Img src={ComputerImg} alt="computer" />
            <InfoWrapper>
              <Title>{laptopList[0].firstName}</Title>
              <SubTitle>Pentium II</SubTitle>
              <StyledLink to="/laptop-data">მეტის ნახვა</StyledLink>
            </InfoWrapper>
          </Container>
        );
      })}
    </div>
  );
};

export default LaptopBriefData;
