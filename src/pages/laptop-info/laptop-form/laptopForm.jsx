import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";

import { DataContext } from "../../../context/dataContext";
import {
  LAPTOP_BRANDS,
  CPU,
} from "../../../select-input-data/select-input-data";
import validationSchema2 from "../../../helpers/validation-schema-2/validationSchema2";
import PopUp from "../../../pop-up/PopUp";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import RadioInput from "../../../components/radio-input/RadioInput";
import {
  FormContainer,
  Wrapper,
  TransparentButtonWrapper,
  ButtonWrapper,
  CpuWrapper,
  InputContainer,
  InputWrapper,
  RadioInputWrapper,
  RadioInputTitle,
  Border,
  ButtonContainer,
  SelectInputWrapper,
  RamWrapper,
  StateWrapper,
  MemoryWrapper,
} from "./laptopForm.style";
import FileUpload from "../../../components/file-upload/FileUpload";
import CustomSelectInput from "../../../components/custom-select-input/CustomSelectInput";

const LaptopForm = () => {
  const navigate = useNavigate();
  const [openPopUp, setOpenPopUp] = useState(false);
  const { setLaptopList } = useContext(DataContext);

  const togglePopUp = () => {
    setOpenPopUp((prevState) => !prevState);
  };

  const navigateToEmployeeInfoPage = () => {
    navigate("/new-laptop/employee-info");
  };

  const formik = useFormik({
    initialValues: {
      laptopName: "",
      laptopBrand: "",
      files: "",
      CPU: "",
      CPU_core: "",
      CPU_flow: "",
      laptopRam: "",
      memoryType: "",
      purchaseDate: "",
      laptopPrice: "",
      laptopState: "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema2,
    onSubmit: (values) => {
      const prevPageData = localStorage.getItem("employeeForm");
      const parsedPrevPageData = JSON.parse(prevPageData);
      setLaptopList((prevState) => {
        return [...prevState, { ...parsedPrevPageData, ...values }];
      });
      localStorage.removeItem("laptopForm");
      localStorage.removeItem("employeeForm");
      togglePopUp();
    },
  });

  useEffect(() => {
    const retrievedData = localStorage.getItem("laptopForm");
    if (retrievedData) {
      formik.setValues(JSON.parse(retrievedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("laptopForm", JSON.stringify(formik.values));
  }, [formik.values]);

  return (
    <Formik>
      <FormContainer onSubmit={formik.handleSubmit}>
        <FileUpload
          value={formik.values.files}
          setFieldValue={formik.setFieldValue}
          error={
            formik.errors.files && formik.touched.files
              ? formik.errors.files
              : null
          }
        />
        <Wrapper>
          <InputContainer>
            <InputWrapper>
              <Input
                label="ლეპტოპის სახელი"
                placeholder="Hp"
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
              <CustomSelectInput
                value={formik.values.laptopBrand}
                placeholder="LaptopBrand"
                onChange={(value) => formik.setFieldValue("laptopBrand", value)}
                options={LAPTOP_BRANDS}
                label="transparent"
                onBlur={formik.handleBlur}
                error={
                  formik.errors.laptopBrand?.value && formik.touched.laptopBrand
                    ? formik.errors.laptopBrand?.value
                    : null
                }
              />
            </SelectInputWrapper>
          </InputContainer>
          <Border />
          <InputContainer>
            <CpuWrapper isSelect>
              <CustomSelectInput
                options={CPU}
                value={formik.values.CPU}
                placeholder="Cpu"
                onChange={(value) => formik.setFieldValue("CPU", value)}
                label="transparent"
                onBlur={formik.handleBlur}
                error={
                  formik.errors.CPU?.value && formik.touched.CPU
                    ? formik.errors.CPU?.value
                    : null
                }
              />
            </CpuWrapper>
            <CpuWrapper>
              <Input
                label="CPU-ს ბირთვი"
                name="CPU_core"
                placeholder="45"
                value={formik.values.CPU_core}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.CPU_core && formik.touched.CPU_core
                    ? formik.errors.CPU_core
                    : null
                }
              />
            </CpuWrapper>
            <CpuWrapper>
              <Input
                label="CPU-ს ნაკადი"
                name="CPU_flow"
                placeholder="12"
                value={formik.values.CPU_flow}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.CPU_flow && formik.touched.CPU_flow
                    ? formik.errors.CPU_flow
                    : null
                }
              />
            </CpuWrapper>
          </InputContainer>
          <RamWrapper>
            <InputWrapper>
              <Input
                label="ლეპტოპის RAM"
                name="laptopRam"
                placeholder="16"
                value={formik.values.laptopRam}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.laptopRam && formik.touched.laptopRam
                    ? formik.errors.laptopRam
                    : null
                }
              />
            </InputWrapper>
            <MemoryWrapper memoryType>
              <RadioInputTitle
                error={
                  formik.errors.memoryType && formik.touched.memoryType
                    ? formik.errors.memoryType
                    : null
                }
              >
                მეხსიერების ტიპი
              </RadioInputTitle>
              <RadioInputWrapper>
                <RadioInput
                  value="SSD"
                  name="memoryType"
                  id="SSD"
                  onChange={formik.handleChange}
                  checked={formik.values.memoryType === "SSD"}
                  label="SSD"
                  onBlur={formik.handleBlur}
                  error={
                    formik.errors.memoryType && formik.touched.memoryType
                      ? formik.errors.memoryType
                      : null
                  }
                />
                <RadioInput
                  value="HDD"
                  name="memoryType"
                  id="HDD"
                  onChange={formik.handleChange}
                  checked={formik.values.memoryType === "HDD"}
                  label="HDD"
                  isSecond
                  onBlur={formik.handleBlur}
                  error={
                    formik.errors.memoryType && formik.touched.memoryType
                      ? formik.errors.memoryType
                      : null
                  }
                />
              </RadioInputWrapper>
            </MemoryWrapper>
          </RamWrapper>
          <Border />
          <InputContainer>
            <InputWrapper>
              <Input
                type="date"
                label="შეძენის რიცხვი (არჩევითი)"
                name="purchaseDate"
                placeholder="დდ / თთ / წწწწ"
                value={formik.values.purchaseDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.purchaseDate && formik.touched.purchaseDate
                    ? formik.errors.purchaseDate
                    : null
                }
              />
            </InputWrapper>
            <InputWrapper laptopPrice>
              <Input
                label="ლეპტოპის ფასი"
                name="laptopPrice"
                placeholder="00"
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
          <StateWrapper>
            <RadioInputTitle
              error={
                formik.errors.laptopState && formik.touched.laptopState
                  ? formik.errors.laptopState
                  : null
              }
            >
              ლეპტოპის მდგომარეობა
            </RadioInputTitle>
            <RadioInputWrapper isLast>
              <RadioInput
                value="ახალი"
                name="laptopState"
                id="ახალი"
                onChange={formik.handleChange}
                checked={formik.values.laptopState === "ახალი"}
                label="ახალი"
                onBlur={formik.handleBlur}
                error={
                  formik.errors.laptopState && formik.touched.laptopState
                    ? formik.errors.laptopState
                    : null
                }
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
          </StateWrapper>
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
              <Button text="დამახსოვრება" type="submit" />
              {openPopUp && <PopUp togglePopUp={togglePopUp} />}
            </ButtonWrapper>
          </ButtonContainer>
        </Wrapper>
      </FormContainer>
    </Formik>
  );
};

export default LaptopForm;
