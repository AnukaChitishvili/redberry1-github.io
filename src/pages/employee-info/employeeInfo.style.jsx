import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: #f6f6f6;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 810px) {
    padding-top: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 810px) {
    margin-top: 0;
  }
`;

export const EclipseLogoWrapper = styled.div`
  margin: 50px 0;
  @media (max-width: 810px) {
    display: none;
  }
`;
