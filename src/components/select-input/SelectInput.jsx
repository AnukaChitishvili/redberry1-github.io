import { SelectContainer, Select, ErrorMessage } from "./selectInput.style";

const SelectInput = ({ error, name, id, options, onChange = () => {} }) => {
  return (
    <>
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
