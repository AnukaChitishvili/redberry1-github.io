import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LaptopInfo from "../laptop-brief-data/LaptopBriefData";
import BackwardButton from "../../components/backward-button/BackwardButton";
import { Container, ListWrapper, Title } from "./laptopList.style";

const LaptopList = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  const navigateToLaptopInfoPage = () => {
    navigate("/new-laptop/laptop-info");
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    fetch(
      "https://pcfy.redberryinternship.ge/api/laptops?1c6395235ac08f3fa0fa672dbb38c029"
    )
      .then((res) => res.json())
      .then((res) => setCards(res.data));
  }, []);

  return (
    <Container>
      <BackwardButton onClick={navigateToLaptopInfoPage} />
      <Title>ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</Title>
      {cards}
      <ListWrapper>
        {arr.map((item) => (
          <LaptopInfo />
        ))}
      </ListWrapper>
    </Container>
  );
};

export default LaptopList;
