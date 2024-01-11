import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ isTransparent }) =>
    isTransparent ? "transparent" : "#62a1eb"};
  width: 100%;
  height: 60px;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  color: ${({ isBlue }) => (isBlue ? "#0089A7" : "#ffffff")};
  font-size: 20px;
  @media (max-width: 810px) {
    font-size: 18px;
    height: ${({ isLanding, isPopUp }) =>
      isLanding ? "60px" : isPopUp ? "60px" : "46px"}
`;
