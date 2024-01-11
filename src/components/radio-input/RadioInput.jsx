import { Input, Label } from "./radioInput.style";

const RadioInput = ({ label, isSecond }) => {
  return (
    <>
      <Input type="radio" id="SSD" name="SSD" value="SSD" isSecond={isSecond} />
      <Label htmlFor="SSD">{label}</Label>
    </>
  );
};

export default RadioInput;
