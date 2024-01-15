import { SelectContainer, Select } from "./selectInput.style";

const SelectInput = ({ name, id, options, onChange = () => {} }) => {
  console.log(name);

  return (
    <>
      {/* <label for="position">Standard Select</label> */}
      <SelectContainer>
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
    </>
  );
};

export default SelectInput;
