import * as yup from "yup";

const validationSchema2 = yup.object().shape({
  laptopName: yup.string().required("სავალდებულო ველი"), // 1.შესაძლებელია შეიცავდეს მხოლოდ ლათინურ სიმბოლოებს, რიცხვებსა და !@#$%^&*()_+=
  laptopBrand: yup.string().required("სავალდებულო ველი"),
  CPU: yup.string().required("სავალდებულო ველი"),
  CPU_core: yup
    .string()
    // .matches("/^[0-9]+$/", "მხოლოდ ციფრები")
    .required("სავალდებულო ველი"),
  CPU_flow: yup.string().required("სავალდებულო ველი"),
  // // .matches("/^[0-9]+$/", "მხოლოდ ციფრები"),
  // // .required("სავალდებულო ველი"),
  laptopRam: yup
    .string()
    // .matches("/^[0-9]+$/", "მხოლოდ ციფრები")
    .required("სავალდებულო ველი"),
  purchaseDate: yup.string().required("სავალდებულო ველი"), // not required (optional)
  laptopPrice: yup
    .string()
    // .matches("/^[0-9]+$/", "მხოლოდ ციფრები")
    .required("სავალდებულო ველი"), // only number (gel)
  memoryType: yup.string().required("სავალდებულო ველი"),
  laptopState: yup.string().required("სავალდებულო ველი"),
});

export default validationSchema2;
