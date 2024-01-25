import { useState, useEffect, useContext } from "react";
import { useFormik, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../../../context/dataContext";
import validationSchema from "../../../helpers/validation-schema/validationSchema";
import { TEAMS, POSITIONS } from "../../../data/data";
import Input from "../../../components/input/Input";
import SelectInput from "../../../components/select-input/SelectInput";
import Button from "../../../components/button/Button";

import {
  FormContainer,
  Wrapper,
  InputsContainer,
  InputContainer,
  InputWrapper,
  SelectInputWrapper,
  BottomInputWrapper,
  ButtonWrapper,
} from "./employeeForm.style";
import useGetData from "../../../test/useGetData";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const { laptopList, setLaptopList } = useContext(DataContext);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      surName: "",
      email: "",
      phoneNumber: "",
      team_id: "",
      position_id: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);

      navigate("/new-laptop/laptop-info");
      setLaptopList([values]);
    },
  });

  console.log("renderidan", laptopList);
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
            <SelectInput
              options={TEAMS}
              name="team_id"
              value={formik.values.team_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors.team_id && formik.touched.team_id
                  ? formik.errors.team_id
                  : null
              }
            />
          </SelectInputWrapper>
          <SelectInputWrapper>
            <SelectInput
              options={POSITIONS}
              name="position_id"
              value={formik.values.position_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors.position_id && formik.touched.position_id
                  ? formik.errors.position_id
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
      </FormContainer>
    </Formik>
  );
};

export default EmployeeForm;
