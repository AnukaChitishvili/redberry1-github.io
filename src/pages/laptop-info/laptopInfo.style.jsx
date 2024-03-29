import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 810px) {
    height: 100vh;
  }
`;

export const TitleWrapper = styled.div`
  margin-top: 80px;
  @media (max-width: 810px) {
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const EclipseLogoWrapper = styled.div`
  margin: 50px 0;
`;
