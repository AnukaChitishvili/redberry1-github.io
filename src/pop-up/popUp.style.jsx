import styled from "styled-components";

export const Container = styled.div`
  background-color: grey;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopUpWrapper = styled.div`
  background-color: #ffffff;
  width: 847px;
  height: 537px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* z-index: 100; */
  @media (max-width: 810px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
    position: relative;
  }
`;

export const SuccessIcon = styled.img`
  width: 300px;
  height: 250px;
  margin-top: 20px;
  @media (max-width: 810px) {
    width: 137px;
    height: auto;
    margin-top: 100px;
  }
`;

export const Title = styled.h3`
  color: #000000;
  font-size: 25px;
  margin: 0;
  margin-top: 10px;
  @media (max-width: 810px) {
    width: 137px;
    font-size: 22px;
    text-align: center;
    width: 164px;
    line-height: 34px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 297px;
  margin-top: 25px;
  @media (max-width: 810px) {
    position: absolute;
    bottom: ${({ isFirst }) => (isFirst ? "120px" : "40px")};
  }
`;
