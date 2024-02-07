import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  padding: 68px 100px;
  border-radius: 18px;
  @media (max-width: 810px) {
    padding: 0 16px;
    margin: 0;
    width: 100%;
    margin-top: 20px;
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
  }
`;

export const InputWrapper = styled.div`
  width: 300px;
  @media (max-width: 810px) {
    margin-left: 0;
    margin-top: 19px;
    width: 100%;
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
    margin-bottom: 20px;
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

export const MobileUploadContainer = styled.div`
  width: 100%;
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border-radius: 12px;
  border: 1px dashed #62a1eb;
  @media (min-width: 810px) {
    display: none;
  }
`;

export const UploadIconContainer = styled.img`
  width: 54px;
  height: 54px;
  margin-top: 20px;
`;

//

export const Div = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 30px;
  @media (max-width: 810px) {
    flex-direction: column;
    align-items: unset;
  }
`;

export const Wrapa = styled.div`
  margin-left: 100px;
  @media (max-width: 810px) {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0;
  }
`;

export const RadioInputWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  @media (max-width: 810px) {
    /* flex-direction: flex-start; */
  }
`;

export const Divv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  flex-direction: column;

  align-items: flex-start;
`;
