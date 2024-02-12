import { useEffect } from "react";
import { useFormik, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import validationSchema from "../../../helpers/validation-schema/validationSchema";
import { TEAMS, POSITIONS } from "../../../select-input-data/select-input-data";
import CustomSelectInput from "../../../components/custom-select-input/CustomSelectInput";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";

import {
  FormContainer,
  Wrapper,
  ContentWrapper,
  InputsContainer,
  InputContainer,
  InputWrapper,
  SelectInputWrapper,
  BottomInputWrapper,
  ButtonWrapper,
} from "./employeeForm.style";

const EmployeeForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      surName: "",
      email: "",
      phoneNumber: "",
      teamId: "",
      positionId: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      navigate("/new-laptop/laptop-info");
    },
  });

  useEffect(() => {
    const retrievedData = localStorage.getItem("employeeForm");
    if (retrievedData) {
      formik.setValues(JSON.parse(retrievedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("employeeForm", JSON.stringify(formik.values));
  }, [formik.values]);

  return (
    <Formik>
      <FormContainer onSubmit={formik.handleSubmit}>
        <ContentWrapper>
          <Wrapper>
            <InputsContainer>
              <InputContainer>
                <InputWrapper>
                  <Input
                    name="firstName"
                    label="სახელი"
                    placeholder="ანუკა"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.errors.firstName && formik.touched.firstName
                        ? formik.errors.firstName
                        : null
                    }
                  />
                </InputWrapper>
              </InputContainer>
              <InputContainer>
                <InputWrapper>
                  <Input
                    name="surName"
                    label="გვარი"
                    placeholder="ჩიტიშვილი"
                    value={formik.values.surName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.errors.surName && formik.touched.surName
                        ? formik.errors.surName
                        : null
                    }
                  />
                </InputWrapper>
              </InputContainer>
            </InputsContainer>
            <SelectInputWrapper>
              <CustomSelectInput
                value={formik.values.teamId}
                options={TEAMS}
                placeholder="თიმი"
                onChange={(value) => formik.setFieldValue("teamId", value)}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.teamId?.value && formik.touched.teamId
                    ? formik.errors.teamId?.value
                    : null
                }
              />
            </SelectInputWrapper>
            <SelectInputWrapper>
              <CustomSelectInput
                value={formik.values.positionId}
                options={POSITIONS}
                placeholder="პოზიცია"
                onChange={(value) => formik.setFieldValue("positionId", value)}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.positionId?.value && formik.touched.positionId
                    ? formik.errors.positionId?.value
                    : null
                }
              />
            </SelectInputWrapper>
            <BottomInputWrapper>
              <InputWrapper>
                <Input
                  type="email"
                  name="email"
                  label="მეილი"
                  placeholder="AnukaChiti1@redberry.ge"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.errors.email && formik.touched.email
                      ? formik.errors.email
                      : null
                  }
                />
              </InputWrapper>
            </BottomInputWrapper>
            <BottomInputWrapper>
              <InputWrapper>
                <Input
                  type="number"
                  name="phoneNumber"
                  label="ტელეფონის ნომერი"
                  placeholder="555 900 655"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.errors.phoneNumber && formik.touched.phoneNumber
                      ? formik.errors.phoneNumber
                      : null
                  }
                />
              </InputWrapper>
            </BottomInputWrapper>
          </Wrapper>
          <ButtonWrapper>
            <Button text="შემდეგი" type="submit" />
          </ButtonWrapper>
        </ContentWrapper>
      </FormContainer>
    </Formik>
  );
};

export default EmployeeForm;
