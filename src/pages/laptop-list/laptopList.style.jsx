import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  //
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  @media (max-width: 810px) {
    padding: 0 20px;
    padding-bottom: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  width: 100%;
  @media (max-width: 810px) {
    margin-top: 10px;
  }
`;

export const ListWrapper = styled.div`
  width: 1200px;
  /* width: 60%; */
  height: auto;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 810px) {
    max-width: unset;
    flex-wrap: unset;
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
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
