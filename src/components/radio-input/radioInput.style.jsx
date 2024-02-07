import styled from "styled-components";

export const Input = styled.input`
  margin: 0;
  margin-left: ${({ isSecond }) => (isSecond ? "30px" : "0")};
  width: 100%;
`;

export const Label = styled.label`
  color: #000000;
  font-size: 16px;
  margin-left: 10px;
`;

export const ErrorMessage = styled.span`
  color: #e52f2f;
  font-size: 14px;
  text-align: center;
`;
