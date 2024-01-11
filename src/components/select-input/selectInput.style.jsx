import styled from "styled-components";

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: none;
  padding: 20px 10px 20px;
  cursor: pointer;
  border-radius: 12px;
  background-color: #ebebeb;
  &:after {
    content: "";
    width: 20px;
    height: 15px;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    background: #000000;
  }
  @media (max-width: 810px) {
    width: 96%;
  }
`;

export const Select = styled.select`
  appearance: none;
  border: none;
  background-color: transparent;
  font-size: 18px;
  width: 100%;
  outline: none;
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  color: #e52f2f;
  position: absolute;
  bottom: -20px;
`;
