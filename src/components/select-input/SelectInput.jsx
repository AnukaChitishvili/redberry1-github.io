import {
  SelectContainer,
  Select,
  ErrorMessage,
  Label,
} from "./selectInput.style";

const SelectInput = ({
  label,
  error,
  name,
  id,
  options,
  onChange = () => {},
}) => {
  return (
    <>
      <Label>{label}</Label>
      <SelectContainer hasError={error}>
        <Select name={name} id={id} onChange={onChange}>
          {options.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </Select>
      </SelectContainer>
      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
};

export default SelectInput;
