import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik, Field } from "formik";

import { DataContext } from "../../../context/dataContext";
import { LAPTOP_BRANDS, CPU } from "../../../test/selectInputData";
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
} from "./laptopForm.style";
import SelectInput from "../../../components/select-input/SelectInput";
import { getValue } from "@testing-library/user-event/dist/utils";

const LaptopForm = () => {
  const navigate = useNavigate();
  const [openPopUp, setOpenPopUp] = useState(false);

  const togglePopUp = () => {
    setOpenPopUp((prevState) => !prevState);
    navigate("/new-laptop/success");
  };

  const navigateToEmployeeInfoPage = () => {
    navigate("/new-laptop/employee-info");
  };

  const formik = useFormik({
    initialValues: {
      laptopName: "",
      laptopBrand: [],
      CPU: [],
      CPU_core: "",
      CPU_flow: "",
      laptopRam: "",
      memoryType: "",
      purchaseDate: "",
      laptopPrice: "",
      laptopState: "",
    },
    validationSchema: validationSchema2,
    onSubmit: (values) => {
      console.log("this", values);
    },
  });

  useEffect(() => {
    const retrievedData = localStorage.getItem("values");
    if (retrievedData) {
      formik.setValues(JSON.parse(retrievedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(formik.values));
  }, [formik.values]);

  return (
    <Formik>
      <FormContainer onSubmit={formik.handleSubmit}>
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
              <Input
                label="ლეპტოპის სახელი"
                name="laptopName"
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
                options={LAPTOP_BRANDS}
                name="laptopBrand"
                value={formik.values.laptopBrand}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.laptopBrand && formik.touched.laptopBrand
                    ? formik.errors.laptopBrand
                    : null
                }
              />
            </SelectInputWrapper>
          </InputContainer>
          <Border />
          <InputContainer>
            <SelectInputWrapper>
              <SelectInput
                options={CPU}
                name="CPU"
                value={formik.values.CPU}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                  <RadioInput
                    value="SSD"
                    name="memoryType"
                    id="SSD"
                    onChange={formik.handleChange}
                    checked={formik.values.memoryType === "SSD"}
                    label="SSD"
                  />
                  <RadioInput
                    value="HDD"
                    name="memoryType"
                    id="HDD"
                    onChange={formik.handleChange}
                    checked={formik.values.memoryType === "HDD"}
                    label="HDD"
                    isSecond
                  />
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
              <RadioInput
                value="ახალი"
                name="laptopState"
                id="ახალი"
                onChange={formik.handleChange}
                checked={formik.values.laptopState === "ახალი"}
                label="ახალი"
              />
              <RadioInput
                value="მეორადი"
                name="laptopState"
                id="მეორადი"
                onChange={formik.handleChange}
                checked={formik.values.laptopState === "მეორადი"}
                label="მეორადი"
                isSecond
              />
            </RadioInputWrapper>
          </RadioInputContainer>
          <ButtonContainer>
            <TransparentButtonWrapper>
              <Button
                text="უკან"
                isTransparent
                isBlue
                type="button"
                onClick={navigateToEmployeeInfoPage}
              />
            </TransparentButtonWrapper>
            <ButtonWrapper>
              <Button
                text="დამახსოვრება"
                type="submit"
                // onClick={openPopUp}
              />
              {/* {popUp && <PopUp />} */}
            </ButtonWrapper>
          </ButtonContainer>
        </Wrapper>
      </FormContainer>
    </Formik>
  );
};

export default LaptopForm;
