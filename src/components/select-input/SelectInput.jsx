import { SelectContainer, Select } from "./selectInput.style";

const SelectInput = ({ name, id, positions, onChange = () => {} }) => {
  return (
    <>
      {/* <label for="position">Standard Select</label> */}
      <SelectContainer>
        <Select name={name} id={id} onChange={onChange}>
          {positions.map((position) => {
            return (
              <option value={position} key={position}>
                {position}
              </option>
            );
          })}
        </Select>
      </SelectContainer>
    </>
  );
};

export default SelectInput;
