import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../../context/dataContext";
import LaptopBriefData from "../laptop-brief-data/LaptopBriefData";
import BackwardButton from "../../components/backward-button/BackwardButton";
import { Container, Wrapper, ListWrapper, Title } from "./laptopList.style";

const LaptopList = () => {
  const { laptopList } = useContext(DataContext);
  const navigate = useNavigate();

  const navigateToLaptopInfoPage = () => {
    navigate("/new-laptop/laptop-info");
    localStorage.removeItem("image");
  };

  console.log(laptopList);

  return (
    <Container>
      <BackwardButton onClick={navigateToLaptopInfoPage} />
      <Wrapper>
        <Title>ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</Title>
        <ListWrapper>
          {laptopList.map((_, index) => (
            <LaptopBriefData key={index} />
          ))}
        </ListWrapper>
      </Wrapper>
    </Container>
  );
};

export default LaptopList;
