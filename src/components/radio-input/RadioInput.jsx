import { Input, Label } from "./radioInput.style";

const RadioInput = ({
  checked,
  label,
  name,
  value,
  onChange = () => {},
  isSecond,
  id,
  onBlur = () => {},
}) => {
  return (
    <>
      <Input
        onBlur={onBlur}
        id={id}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        isSecond={isSecond}
      />
      <Label>{label}</Label>
    </>
  );
};

export default RadioInput;
