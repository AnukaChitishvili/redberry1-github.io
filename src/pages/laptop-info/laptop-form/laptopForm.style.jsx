import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 68px 100px;
  border-radius: 18px;
  @media (max-width: 810px) {
    margin-top: 10px;
    padding: 0;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const UploadTitle = styled.h3`
  color: #4386a9;
  font-size: 20px;
  width: 195px;
  margin-bottom: 50px;
  text-align: center;
  @media (max-width: 810px) {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 810px) {
    width: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 810px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CpuWrapper = styled.div`
  width: ${({ isSelect }) => (isSelect ? "200px" : "170px")};
  @media (max-width: 810px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const InputWrapper = styled.div`
  width: 300px;
  @media (max-width: 810px) {
    margin-left: 0;
    width: 100%;
    margin-top: ${({ laptopPrice }) => (laptopPrice ? "50px" : 0)};
  }
`;

export const SelectInputWrapper = styled.div`
  width: 300px;
  margin-left: 50px;
  @media (max-width: 810px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const RadioInputContainer = styled.div``;

export const RadioInputTitle = styled.h3`
  color: ${({ error }) => (error ? "red" : "black")};
  font-size: 18px;
  margin: 0;
  @media (max-width: 810px) {
    font-size: 16px;
  }
`;

export const Border = styled.div`
  border: 1px solid #4386a9;
  width: 100%;
  margin: 50px 0;
  @media (max-width: 810px) {
    margin-bottom: 10px;
  }
`;

export const SecondSection = styled.div`
  margin-top: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;

export const ButtonWrapper = styled.div`
  width: 233px;
  @media (max-width: 810px) {
    width: 150px;
  }
`;

export const TransparentButtonWrapper = styled.div`
  width: 10px;
  color: transparent;
`;

// Mobile

export const RamWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 30px;
  @media (max-width: 810px) {
    flex-direction: column;
    align-items: unset;
  }
`;

export const RadioInputWrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const StateWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  flex-direction: column;
  align-items: flex-start;
`;

export const MemoryWrapper = styled.div`
  margin-left: 50px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 810px) {
    margin-left: 0;
    margin-top: ${({ memoryType }) => (memoryType ? "50px" : "20px")};
  }
`;
