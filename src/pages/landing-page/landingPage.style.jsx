import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  @media (max-width: 810px) {
    padding: 0 20px;
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  margin: 40px 0;
  @media (max-width: 810px) {
    margin-top: 100px;
  }
`;

export const LandingImage = styled.img`
  width: 781px;
  height: 482px;
  @media (max-width: 810px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  margin: 40px 0;
`;

export const ButtonWrapper = styled.div`
  &:first-child {
    margin-top: 0;
  }
  margin-top: 20px;
  width: 387px;
  height: 60px;
  @media (max-width: 810px) {
    width: 358px;
  }
`;

// Mobile

export const MobileLandingImage = styled.img`
  width: 270.58px;
  height: 349px;
  margin: 117px;
  margin-top: 85px;
  @media (min-width: 810px) {
    display: none;
  }
`;
