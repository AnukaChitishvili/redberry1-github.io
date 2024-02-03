import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: 810px) {
    width: 96%;
  }
`;

const handleColorType = (color) => {
  switch (color) {
    case "error":
      return "#E52F2F";
    case "transparent":
      return "transparent";
    default:
      return "#000000";
  }
};

// label ???

export const Label = styled.p`
  font-size: 18px;
  color: ${({ color }) => handleColorType(color)};
  margin-bottom: 5px;
  min-width: 242px;
`;

export const InputWrapper = styled.input`
  width: 100%;
  height: 60px;
  border: ${({ error }) =>
    error ? "1px solid #e52f2f" : " 1px solid #62a1eb"};
  border-radius: 12px;
  padding-left: 10px;
  margin-top: 10px;
  @media (max-width: 810px) {
    /* margin-top: 19px; */
    height: 60px;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  color: #e52f2f;
  position: absolute;
  bottom: -20px;
`;
