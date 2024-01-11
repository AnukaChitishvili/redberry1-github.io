import styled from "styled-components";

export const Circle = styled.button`
  width: 53px;
  height: 53px;
  color: grey;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 62px;
  left: 45px;
  @media (max-width: 810px) {
    background: transparent;
    top: 12px;
    left: 9px;
  }
`;
