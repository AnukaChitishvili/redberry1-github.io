import * as yup from "yup";

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "მინიმუმ 2 სიმბოლო")
    .required("სავალდებულო ველი"),
  surName: yup
    .string()
    .min(2, "მინიმუმ 2 სიმბოლო")
    .required("სავალდებულო ველი"),
  email: yup
    .string()
    .matches("[a-z0-9]+@redberry.ge", "უნდა მთავრდებოდეს @redberry.ge-თი")
    .required("სავალდებულო ველი"),
  phoneNumber: yup.string().required("სავალდებულო ველი"),
  teamId: yup.object().shape({
    value: yup.string().required("სავალდებულო ველი"),
    label: yup.string().required("სავალდებულო ველი"),
  }),
  positionId: yup.object().shape({
    value: yup.string().required("სავალდებულო ველი"),
    label: yup.string().required("სავალდებულო ველი"),
  }),
});

export default validationSchema;
