import { useState } from "react";
import { Formik, useFormik } from "formik";

import PopUp from "../../../pop-up/PopUp";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import RadioInput from "../../../components/radio-input/RadioInput";
import UploadIcon from "../../../assets/icons/Camera-icon.svg";
import {
  FormContainer,
  UploadContainer,
  UploadTitle,
  TransparentButtonWrapper,
  ButtonWrapper,
  // rename
  Wrapper,
  InputContainer,
  InputWrapper,
  RadioInputContainer,
  RadioInputWrapper,
  RadioInputTitle,
  Border,
  SecondSection,
  ButtonContainer,
  MobileUploadContainer,
  UploadIconContainer,
} from "./form.style";

const Form = () => {
  const [popUp, setPopUp] = useState(false);

  const openPopUp = () => {
    setPopUp((prevState) => !prevState);
  };

  // routingze ra unda xdebosdes am dros da es unda gadadiosdes tu gaivlis validciebs

  return (
    <Formik>
      <FormContainer>
        <UploadContainer>
          <UploadTitle>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</UploadTitle>
          <ButtonWrapper>
            <Button text="ატვირთე" />
          </ButtonWrapper>
        </UploadContainer>
        <MobileUploadContainer>
          <UploadIconContainer src={UploadIcon} alt="upload" />
          <UploadTitle>ლეპტოპის ფოტოს ატვირთვა</UploadTitle>
        </MobileUploadContainer>
        <Wrapper>
          <InputContainer>
            <InputWrapper>
              <Input label="ლეპტოპის სახელი" />
            </InputWrapper>

            <InputWrapper>
              <Input label="transparent" color="transparent" />
            </InputWrapper>
          </InputContainer>
          <Border />
          <InputContainer>
            <Input label="transparent" color="transparent" />
            <InputWrapper>
              <Input label="CPU-ს ბირთვი" />
            </InputWrapper>
            <InputWrapper>
              <Input label="CPU-ს ბირთვი" />
            </InputWrapper>
          </InputContainer>
          <SecondSection>
            <InputContainer>
              <Input label="ლეპტოპის RAM (GB)" />
              <RadioInputContainer>
                <RadioInputTitle>მეხსიერების ტიპი</RadioInputTitle>
                <RadioInputWrapper>
                  <RadioInput label="SSD" />
                  <RadioInput label="HDD" isSecond />
                </RadioInputWrapper>
              </RadioInputContainer>
            </InputContainer>
          </SecondSection>
          <Border />
          <InputContainer>
            <Input label="შეძენის რიცხვი (არჩევითი)" />
            <InputWrapper>
              <Input label="ლეპტოპის ფასი" />
            </InputWrapper>
          </InputContainer>
          <RadioInputContainer isLast>
            <RadioInputTitle>ლეპტოპის მდგომარეობა</RadioInputTitle>
            <RadioInputWrapper>
              <RadioInput label="ახალი" />
              <RadioInput label="მეორადი" isSecond />
            </RadioInputWrapper>
          </RadioInputContainer>
          <ButtonContainer>
            <TransparentButtonWrapper>
              <Button text="უკან" isTransparent isBlue />
            </TransparentButtonWrapper>
            <ButtonWrapper>
              <Button text="დამახსოვრება" onClick={openPopUp} />
              {popUp && <PopUp />}
            </ButtonWrapper>
          </ButtonContainer>
        </Wrapper>
      </FormContainer>
    </Formik>
  );
};

export default Form;
