import styled from "styled-components";

export const UploadContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f6f6f6;
  border-radius: 18px;
  border: 1px dashed #62a1eb;
  margin-bottom: 30px;
  position: relative;
  @media (max-width: 810px) {
    /* display: none; */
    height: 200px;
    width: 90%;
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 810px) {
  }
`;

export const UploadTitle = styled.h3`
  color: #4386a9;
  font-size: 20px;
  max-width: 195px;
  text-align: center;
  @media (max-width: 810px) {
    font-size: 16px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border-radius: 18px;
`;

export const ListItem = styled.li`
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 233px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 18px;
  background-repeat: no-repeat;
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  color: #e52f2f;
  position: absolute;
  bottom: -30px;
`;
