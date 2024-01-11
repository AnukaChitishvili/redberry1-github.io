import {
  InputContainer,
  Label,
  InputWrapper,
  ErrorMessage,
} from "./input.style";

const Input = ({
  name,
  placeholder,
  type,
  value,
  onChange = () => {},
  error,
  onBlur = () => {},
  label,
  color,
}) => {
  return (
    <InputContainer>
      <Label error={error} color={color}>
        {label}
      </Label>
      <InputWrapper
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </InputContainer>
  );
};

export default Input;
