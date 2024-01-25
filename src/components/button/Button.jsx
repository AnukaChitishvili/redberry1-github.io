import { Container } from "./button.style";

const Button = ({
  type,
  text,
  isBlue,
  isTransparent,
  isLanding,
  isPopUp,
  onClick = () => {},
}) => {
  return (
    <Container
      onClick={onClick}
      type={type}
      isTransparent={isTransparent}
      isBlue={isBlue}
      isLanding={isLanding}
      isPopUp={isPopUp}
    >
      {text}
    </Container>
  );
};

export default Button;
