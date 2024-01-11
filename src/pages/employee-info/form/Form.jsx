import { useState, useEffect } from "react";
import { useFormik, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import validationSchema from "../../../helpers/validation-schema/validationSchema";
// import { TEAMS, POSITIONS } from "../../../data/data";
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
} from "./form.style";

const Form = () => {
  const navigate = useNavigate();
  // const [teams, setTeams] = useState(TEAMS);
  // const [positions, setPositions] = useState(POSITIONS);

  // useEffect(() => {
  //   fetch("https://pcfy.redberryinternship.ge/api/teams")
  //     .then((res) => res.json())
  //     .then((res) => setTeams(res.data));
  // }, []);

  // bla bla

  const formik = useFormik({
    initialValues: {
      firstName: "",
      surName: "",
      email: "",
      phoneNumber: "",
      // team_id: "",
      // position_id: "",
    },
    validationSchema,
    onSubmit: (values) => {
      navigate("/laptop-info");
    },
  });

  // Eseni pirikit ar unda ikos? jer set ara?

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
            {/* <SelectInput
      name="team_id"
      title="თიმი"
      // options={["this", "and"]}
      // setFieldValue={handleInputChange}
      value={values.team_id}
      // error={errors.team_id && touched.team_id ? errors.team_id : null}
    /> */}
          </SelectInputWrapper>
          <SelectInputWrapper>
            {/* <SelectInput
      name="position"
      // id="position"
      // positions={values.position}
      // setFieldValue={handleInputChange}
    /> */}
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

export default Form;
