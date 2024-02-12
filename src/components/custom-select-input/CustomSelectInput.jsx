import Select from "react-select";

import {
  ErrorMessage,
  Label,
  SelectInputWrapper,
} from "./customSelectInput.style";

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
          backgroundColor: "grey",
        },
      };
    },
  };

  return (
    <SelectInputWrapper>
      <Label>{label}</Label>
      <Select
        value={value}
        options={options}
        onChange={(value) => onChange(value)}
        placeholder={placeholder}
        styles={styles}
        onBlur={onBlur}
        error={error}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </SelectInputWrapper>
  );
};

export default CustomSelectInput;
