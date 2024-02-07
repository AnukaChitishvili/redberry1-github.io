import Select from "react-select";

import { ErrorMessage, Label } from "./customSelectInput.style";

const CustomSelectInput = ({
  options,
  placeholder,
  onChange,
  value,
  error,
  onBlur,
  label,
}) => {
  const styles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#EBEBEB",
      padding: "13px",
      borderRadius: "12px",
    }),
    option: (styles) => {
      return {
        ...styles,
        color: "#000000",
        ":hover": {
          backgroundColor: "red",
        },
      };
    },
  };

  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  // const handleChange = (selectedOption) => {
  //   console.log("selected", selectedOption);
  // };

  return (
    <>
      <Label>{label}</Label>
      <Select
        value={defaultValue(options, value)}
        options={options}
        onChange={(value) => onChange(value)}
        placeholder={placeholder}
        styles={styles}
        onBlur={onBlur}
        // error={error}
      />
      {/* <ErrorMessage>{error}</ErrorMessage> */}
    </>
  );
};

export default CustomSelectInput;
