import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 100px;
  @media (max-width: 810px) {
    padding: 0 16px 20px;
  }
`;

export const Title = styled.h3`
  color: #000000;
  font-size: 34px;
  margin: 70px 0 100px;
  @media (max-width: 810px) {
    font-size: 16px;
    margin-top: 21px;
    margin-bottom: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SectionWrapper = styled.div`
  display: flex;
  &:first-child {
    margin-top: 0;
  }
  @media (max-width: 810px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 577px;
  height: 342px;
  @media (max-width: 810px) {
    width: 100%;
    height: 100%;
    margin: 33px 0;
  }
`;

export const FirstSection = styled.div`
  display: flex;
  margin-left: 50px;
  margin-top: 20px;
  @media (max-width: 810px) {
    margin-left: 0;
  }
`;

export const UnorderedList = styled.ul`
  padding: 0;
`;

export const ListItemTitle = styled.li`
  list-style-type: none;
  font-size: 22px;
  color: #000000;
  margin-top: 30px;
  min-width: 200px;
  &:first-child {
    margin-top: 0;
  }
  width: 300px;
  @media (max-width: 810px) {
    font-size: 14px;
    width: 200px;
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
  font-size: 22px;
  color: #797979;
  margin-top: ${({ isLast }) => (isLast ? "0" : "30px")};
  &:first-child {
    margin-top: 0;
  }
  @media (max-width: 810px) {
    font-size: 14px;
  }
`;

export const Border = styled.div`
  border: 1px solid grey;
  margin: 50px 0;
  width: 1150px;
  @media (max-width: 810px) {
    width: 100%;
  }
`;

export const EvenSection = styled.div`
  display: flex;
`;

export const ThirdParagraph = styled.div`
  display: flex;
  margin-left: 202px;
  @media (max-width: 810px) {
    margin-left: 0;
  }
`;

export const FifthSection = styled.ul`
  display: flex;
  margin-left: 205px;
  padding: 0;
  @media (max-width: 810px) {
    margin-left: 0;
  }
`;
