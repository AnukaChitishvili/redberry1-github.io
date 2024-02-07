import { useEffect, useContext } from "react";
import { useFormik, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../../../context/dataContext";
import validationSchema from "../../../helpers/validation-schema/validationSchema";
import { TEAMS, POSITIONS } from "../../../select-input-data/select-input-data";
import CustomSelectInput from "../../../test/CustomSelectInput";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";

import {
  FormContainer,
  Wrapper,
  Div,
  InputsContainer,
  InputContainer,
  InputWrapper,
  SelectInputWrapper,
  BottomInputWrapper,
  ButtonWrapper,
} from "./employeeForm.style";

const EmployeeForm = () => {
  const navigate = useNavigate();
  // const { laptopList, setLaptopList } = useContext(DataContext);

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
      console.log("values", values);
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

  console.log("ksjdhgkshdgk ", formik.errors);

  return (
    <Formik>
      <FormContainer onSubmit={formik.handleSubmit}>
        <Div>
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
                value={formik.values.team_id}
                options={TEAMS}
                placeholder="თიმი"
                onChange={(value) => formik.setFieldValue("team_id", value)}
                onBlur={formik.handleBlur}
              />
              {/* {formik.errors.team_id && formik.touched.team_id
                ? formik.errors.team_id
                : "jandaba"} */}
            </SelectInputWrapper>
            <SelectInputWrapper>
              <CustomSelectInput
                value={formik.values.position_id}
                options={POSITIONS}
                placeholder="პოზიცია"
                onChange={(value) => formik.setFieldValue("position_id", value)}
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
        </Div>
      </FormContainer>
    </Formik>
  );
};

export default EmployeeForm;
