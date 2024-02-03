import styled from "styled-components";

export const FormContainer = styled.form`
  /* width: 50%; */
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  // casahshleli
  width: 700px;
  height: 700px;
  display: flex;
  justify-content: center;
  padding: 100px;
  /* padding: 68px 174px 45px; */
  border-radius: 18px;
  @media (max-width: 810px) {
    padding: 0 16px;
    margin: 0;
  }
`;

//

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

export const InputWrapper = styled.div`
  width: 45%;
  @media (max-width: 810px) {
    margin-left: 0;
    margin-top: 19px;
    width: 100%;
  }
`;

export const SelectInputWrapper = styled.div`
  width: 45%;
  /* margin-top: 33px;
  width: ${({ isFirst }) => (isFirst ? "455px" : "100%")};
  height: 76px;
  margin-left: ${({ isFirst }) => (isFirst ? "30px" : "0")}; */
`;

export const RadioInputContainer = styled.div`
  width: 100%;
  margin-left: ${({ isLast }) => (isLast ? "0" : "50px")};
  margin-top: ${({ isLast }) => (isLast ? "40px" : "0")};
  @media (max-width: 810px) {
    margin-top: 36px;
    margin-left: 19px;
  }
`;

export const RadioInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const RadioInputTitle = styled.h3`
  color: ${({ error }) => (error ? "red" : "black")};
  font-size: 18px;
  margin: 0;
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
