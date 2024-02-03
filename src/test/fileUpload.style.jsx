import styled from "styled-components";

export const UploadContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #f6f6f6;
  border-radius: 18px;
  border: 1px dashed #62a1eb;
  margin-bottom: 30px;
  @media (max-width: 810px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
