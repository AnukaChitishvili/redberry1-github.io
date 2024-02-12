import { useContext } from "react";

import { DataContext } from "../../context/dataContext";
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

  const src = localStorage.getItem("image");

  return (
    <>
      {laptopList.map((item, index) => {
        return (
          <Container key={index}>
            <Img src={src} alt="computer" />
            <InfoWrapper>
              <Title>
                {item.firstName} {item.surName}
              </Title>
              <SubTitle>{item.laptopName}</SubTitle>
              <StyledLink to="/laptop-data">მეტის ნახვა</StyledLink>
            </InfoWrapper>
          </Container>
        );
      })}
    </>
  );
};

export default LaptopBriefData;
