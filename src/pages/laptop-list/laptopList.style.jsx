import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0 250px;
  @media (max-width: 810px) {
    padding: 0 10px 50px;
  }
`;

export const Title = styled.h2`
  color: #000000;
  font-size: 34px;
  margin: 0;
  margin-top: 20px;
  @media (max-width: 810px) {
    font-size: 16px;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  max-width: 1167px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  @media (max-width: 810px) {
    max-width: unset;
    flex-wrap: unset;
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
  }
`;
