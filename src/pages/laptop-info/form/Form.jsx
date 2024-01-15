import { useState, useContext } from "react";
import { Formik, useFormik } from "formik";

import { DataContext } from "../../../context/dataContext";
import { laptopBrands, Cpu } from "../../../test/selectInputData";
import validationSchema2 from "../../../helpers/validation-schema-2/validationSchema2";
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
  SelectInputWrapper,
} from "./form.style";
import SelectInput from "../../../components/select-input/SelectInput";

const Form = () => {
  const { user } = useContext(DataContext);
  const [popUp, setPopUp] = useState(false);

  console.log("this", user);

  const openPopUp = () => {
    setPopUp((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      laptopName: "",
      laptopBrands: [],
      CPU: [],
      CPU_core: "",
      CPU_flow: "",
      laptopRam: "",
      purchaseDate: "",
      laptopPrice: "",
    },
    validationSchema: validationSchema2,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // routingze ra unda xdebosdes am dros da es unda gadadiosdes tu gaivlis validciebs

  return (
    <Formik>
      <FormContainer onSubmit={formik.handleSubmit}>
        {/* <UploadContainer>
          <UploadTitle>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</UploadTitle>
          <ButtonWrapper>
            <Button text="ატვირთე" />
          </ButtonWrapper>
        </UploadContainer>
        <MobileUploadContainer>
          <UploadIconContainer src={UploadIcon} alt="upload" />
          <UploadTitle>ლეპტოპის ფოტოს ატვირთვა</UploadTitle>
        </MobileUploadContainer> */}
        <Wrapper>
          <InputContainer>
            <InputWrapper>
              <Input
                label="ლეპტოპის სახელი"
                name="laptopName"
                placeholder="makoshiii"
                value={formik.values.laptopName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.laptopName && formik.touched.laptopName
                    ? formik.errors.laptopName
                    : null
                }
              />
            </InputWrapper>
            <SelectInputWrapper>
              <SelectInput
                options={laptopBrands}
                name="laptopBrands"
                title="ლეპტოპის ბრენდი"
                value={formik.values.laptopBrands}
                // setFieldValue={handleInputChange}
                error={
                  formik.errors.laptopBrands && formik.touched.laptopBrands
                    ? formik.errors.laptopBrands
                    : null
                }
              />
            </SelectInputWrapper>
          </InputContainer>

          <Border />
          <InputContainer>
            <SelectInputWrapper>
              <SelectInput
                options={Cpu}
                name="CPU"
                title="CPU" // title sad mak ro?..
                value={formik.values.CPU}
                // setFieldValue={handleInputChange}
                error={
                  formik.errors.CPU && formik.touched.CPU
                    ? formik.errors.CPU
                    : null
                }
              />
            </SelectInputWrapper>
            <InputWrapper>
              <Input
                label="CPU-ს ბირთვი"
                name="CPU_core"
                placeholder="cpuuu"
                value={formik.values.CPU_core}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.CPU_core && formik.touched.CPU_core
                    ? formik.errors.CPU_core
                    : null
                }
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                label="CPU-ს ნაკადი"
                name="CPU_flow"
                placeholder="cpuu"
                value={formik.values.CPU_flow}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.CPU_flow && formik.touched.CPU_flow
                    ? formik.errors.CPU_flow
                    : null
                }
              />
            </InputWrapper>
          </InputContainer>
          <SecondSection>
            <InputContainer>
              <Input
                label="ლეპტოპის RAM (GB)"
                name="laptopRam"
                placeholder="laptop ram"
                value={formik.values.laptopRam}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.laptopRam && formik.touched.laptopRam
                    ? formik.errors.laptopRam
                    : null
                }
              />
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
            <Input
              label="შეძენის რიცხვი (არჩევითი)"
              name="purchaseDate"
              placeholder="shedze"
              value={formik.values.purchaseDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors.purchaseDate && formik.touched.purchaseDate
                  ? formik.errors.purchaseDate
                  : null
              }
            />
            <InputWrapper>
              <Input
                label="ლეპტოპის ფასი"
                name="laptopPrice"
                placeholder="price"
                value={formik.values.laptopPrice}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.laptopPrice && formik.touched.laptopPrice
                    ? formik.errors.laptopPrice
                    : null
                }
              />
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
              <Button text="უკან" isTransparent isBlue type="button" />
            </TransparentButtonWrapper>
            <ButtonWrapper>
              <Button
                text="დამახსოვრება"
                type="submit"
                // onClick={openPopUp}
              />
              {popUp && <PopUp />}
            </ButtonWrapper>
          </ButtonContainer>
        </Wrapper>
      </FormContainer>
    </Formik>
  );
};

export default Form;
