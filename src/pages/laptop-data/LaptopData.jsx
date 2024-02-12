import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../../context/dataContext";
import BackwardButton from "../../components/backward-button/BackwardButton";
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
  const { laptopList } = useContext(DataContext);

  const navigateToLaptopListPage = () => {
    navigate("/laptop-list");
    localStorage.removeItem("image");
  };

  const src = localStorage.getItem("image");

  return (
    <Container>
      <BackwardButton onClick={navigateToLaptopListPage} />
      <Title>ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ</Title>
      <ContentWrapper>
        {laptopList.map((item, index) => {
          return (
            <>
              <SectionWrapper key={index}>
                <Img src={src} alt="computer" />
                <FirstSection>
                  <UnorderedList>
                    <ListItemTitle>სახელი:</ListItemTitle>
                    <ListItemTitle>თიმი:</ListItemTitle>
                    <ListItemTitle>პოზიცია:</ListItemTitle>
                    <ListItemTitle>მეილი:</ListItemTitle>
                    <ListItemTitle>ტელ.ნომერი:</ListItemTitle>
                  </UnorderedList>
                  <UnorderedList>
                    <ListItem> {item.firstName} </ListItem>
                    <ListItem>{item.surName}</ListItem>
                    <ListItem>{item.positionId?.value}</ListItem>
                    <ListItem>{item.email}</ListItem>
                    <ListItem>{item.phoneNumber}</ListItem>
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
                    <ListItem>{item.laptopName} </ListItem>
                    <ListItem>{item.laptopBrand?.value}</ListItem>
                    <ListItem>{item.laptopRam}</ListItem>
                    <ListItem>{item.memoryType}</ListItem>
                  </UnorderedList>
                </EvenSection>
                <ThirdParagraph>
                  <UnorderedList>
                    <ListItemTitle> CPU: </ListItemTitle>
                    <ListItemTitle>CPU-ს ბირთვი:</ListItemTitle>
                    <ListItemTitle>CPU-ს ნაკადი:</ListItemTitle>
                  </UnorderedList>
                  <UnorderedList>
                    <ListItem>{item.CPU?.value} </ListItem>
                    <ListItem>{item.CPU_core}</ListItem>
                    <ListItem>{item.CPU_flow}</ListItem>
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
                    <ListItem>{item.laptopState}</ListItem>
                    <ListItem>{item.laptopPrice}</ListItem>
                  </UnorderedList>
                </EvenSection>
                <FifthSection>
                  <ListItemTitle>შევსების რიცხვი:</ListItemTitle>
                  <ListItem isLast>{item.purchaseDate}</ListItem>
                </FifthSection>
              </SectionWrapper>
            </>
          );
        })}
      </ContentWrapper>
    </Container>
  );
};

export default LaptopData;
