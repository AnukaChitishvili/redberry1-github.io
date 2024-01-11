import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 150px;
  margin: 30px 0 0;
  @media (max-width: 810px) {
    padding: 0 16px;
    margin: 0;
    /* background: blue; */
  }
`;

export const UploadContainer = styled.div`
  // es paddingit ro miceria araushavs? widtghit ragac ireoda..
  /* width: 878px;
  height: 600px; */
  padding: 100px 350px;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  border: 1px dashed #62a1eb;
  margin-bottom: 30px;
  @media (max-width: 810px) {
    display: none;
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

export const ButtonWrapper = styled.div`
  width: 233px;
  @media (max-width: 810px) {
    width: 150px;
  }
`;

// rename

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 810px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-left: 50px;
  @media (max-width: 810px) {
    /* background: blue; */
    margin-left: 0;
    margin-top: 19px;
  }
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
  color: #000000;
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
