import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: #ffffff;
  border-radius: 12px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  padding: 90px 100px;
  @media (max-width: 810px) {
    width: 100%;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  @media (max-width: 810px) {
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 15px;
  @media (max-width: 810px) {
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 810px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-left: 30px;
  &:first-child {
    margin-left: 0;
  }
  @media (max-width: 810px) {
    flex-direction: column;
    margin-left: 0;
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  margin: 20px 0;
`;

export const SelectInputWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 76px;
`;

export const BottomInputWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  &:first-child {
    margin-top: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 132px;
  margin-top: 30px;
`;
