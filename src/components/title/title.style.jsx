import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  @media (max-width: 810px) {
    display: none;
  }
`;

export const TitleBorderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleText = styled.h2`
  color: #000000;
  font-size: 20px;
  margin-left: ${({ isFirst }) => (isFirst ? "0" : "15px")};
`;

// Mobile

export const MobileTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: absolute;
  top: 16px;
  right: ${({ isFirstPage }) => (isFirstPage ? "80px" : "51px")}; */
  @media (min-width: 810px) {
    display: none;
  }
`;

export const TitleTextMobile = styled.h2`
  font-size: 16px;
  color: #000000;
  margin-bottom: 5px;
`;

export const Page = styled.span`
  font-size: 14px;
  color: #898989;
`;
