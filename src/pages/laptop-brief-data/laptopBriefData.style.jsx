import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 563px;
  height: 205px;
  margin-top: 20px;
  border-radius: 12px;
  align-items: center;
  background: #eafaff;
  padding-left: 15px;
  @media (max-width: 810px) {
    width: 100%;
    height: 123px;
    padding-left: 0;
  }
`;

export const Img = styled.img`
  width: 266px;
  height: 178px;
  @media (max-width: 810px) {
    height: 109px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const Title = styled.h3`
  color: #000000;
  font-size: 18px;
  @media (max-width: 810px) {
    font-size: 14px;
  }
`;

export const SubTitle = styled.h4`
  color: grey;
  font-size: 18px;
  margin-top: 0;
  @media (max-width: 810px) {
    font-size: 16px;
    margin-bottom: 0;
  }
`;

export const StyledLink = styled(Link)`
  color: #4386a9;
  font-size: 16px;
  margin-top: 20px;
  @media (max-width: 810px) {
    font-size: 14px;
    margin-top: 10px;
  }
`;
