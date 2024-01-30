import * as yup from "yup";

const validationSchema2 = yup.object().shape({
  laptopName: yup
    .string()
    .matches("^[A-Za-z0-9]+$", "მხოლოდ ლათინური ასოები და რიცხვები")
    .required("სავალდებულო ველი"),
  laptopBrand: yup.string().required("სავალდებულო ველი"),
  // laptopImage: yup.string().required("სავალდებულო ველი"),
  CPU: yup.string().required("სავალდებულო ველი"),
  CPU_core: yup
    .string()
    .matches("^[0-9]*$", "მხოლოდ ციფრები")
    .required("სავალდებულო ველი"),
  CPU_flow: yup
    .string()
    .required("სავალდებულო ველი")
    .matches("^[0-9]*$", "მხოლოდ ციფრები")
    .required("სავალდებულო ველი"),
  laptopRam: yup
    .string()
    .matches("^[0-9]*$", "მხოლოდ ციფრები")
    .required("სავალდებულო ველი"),
  purchaseDate: yup.string(),
  laptopPrice: yup
    .string()
    .matches("^[0-9]*$", "მხოლოდ ციფრები")
    .required("სავალდებულო ველი"),
  memoryType: yup.string().required("სავალდებულო ველი"),
  laptopState: yup.string().required("სავალდებულო ველი"),
});

export default validationSchema2;
