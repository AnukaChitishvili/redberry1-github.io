import { useNavigate } from "react-router-dom";

import BackwardButton from "../../components/backward-button/BackwardButton";
import ComputerImg from "../../assets/imgs/Data-computer.svg";
import {
  Container,
  Title,
  ContentWrapper,
  SectionWrapper,
  Img,
  FirstSection,
  UnorderedList,
  ListItemTitle,
  ListItem,
  Border,
  EvenSection,
  ThirdParagraph,
  FifthSection,
} from "./laptopData.style";

const LaptopData = () => {
  const navigate = useNavigate();

  const navigateToLaptopListPage = () => {
    navigate("/laptop-list");
  };

  return (
    <Container>
      <BackwardButton onClick={navigateToLaptopListPage} />
      <Title>ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ</Title>
      <ContentWrapper>
        <SectionWrapper>
          <Img src={ComputerImg} alt="computer" />
          <FirstSection>
            <UnorderedList>
              <ListItemTitle>სახელი:</ListItemTitle>
              <ListItemTitle>თიმი:</ListItemTitle>
              <ListItemTitle>პოზიცია:</ListItemTitle>
              <ListItemTitle>მეილი:</ListItemTitle>
              <ListItemTitle>ტელ.ნომერი:</ListItemTitle>
            </UnorderedList>
            <UnorderedList>
              <ListItem> აკაკი </ListItem>
              <ListItem>წერეთელი</ListItem>
              <ListItem>დიზაინერები</ListItem>
              <ListItem>ako@redberry.ge</ListItem>
              <ListItem>+995 583 45 28 33</ListItem>
            </UnorderedList>
          </FirstSection>
        </SectionWrapper>
        <Border />
        <SectionWrapper>
          <EvenSection>
            <UnorderedList>
              <ListItemTitle>ლეპტოპის სახელი: </ListItemTitle>
              <ListItemTitle>ლეპტოპის ბრენდი:</ListItemTitle>
              <ListItemTitle>RAM:</ListItemTitle>
              <ListItemTitle>მეხსიერების ტიპი:</ListItemTitle>
            </UnorderedList>
            <UnorderedList>
              <ListItem>Razor Bla Bla </ListItem>
              <ListItem>HP</ListItem>
              <ListItem>16</ListItem>
              <ListItem>SSD</ListItem>
            </UnorderedList>
          </EvenSection>
          <ThirdParagraph>
            <UnorderedList>
              <ListItemTitle> CPU: </ListItemTitle>
              <ListItemTitle>CPU-ს ბირთვი:</ListItemTitle>
              <ListItemTitle>CPU-ს ნაკადი:</ListItemTitle>
            </UnorderedList>
            <UnorderedList>
              <ListItem>Intel 5 </ListItem>
              <ListItem>13</ListItem>
              <ListItem>67</ListItem>
            </UnorderedList>
          </ThirdParagraph>
        </SectionWrapper>
        <Border />
        <SectionWrapper>
          <EvenSection>
            <UnorderedList>
              <ListItemTitle> ლეპტოპის მდგომარეობა: </ListItemTitle>
              <ListItemTitle>ლეპტოპის ფასი:</ListItemTitle>
            </UnorderedList>
            <UnorderedList>
              <ListItem>მეორეადი </ListItem>
              <ListItem>1500</ListItem>
            </UnorderedList>
          </EvenSection>
          <FifthSection>
            <ListItemTitle>შევსების რიცხვი:</ListItemTitle>
            <ListItem isLast>12 / 06 / 2130</ListItem>
          </FifthSection>
        </SectionWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default LaptopData;
