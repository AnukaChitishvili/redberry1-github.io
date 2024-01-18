import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: #ffffff;
  border-radius: 12px;
  margin-top: 25px;
  padding: 40px 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 810px) {
    margin-top: 30px;
    padding: 0 20px 58px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const InputsContainer = styled.div`
  display: flex;
  @media (max-width: 810px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  width: 410px;
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
  // shesacv
  background-color: red;
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
