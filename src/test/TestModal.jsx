import { Container, Rectangle } from "./testModal.style";

const TestModal = ({ innerRef }) => {
  return (
    <Container ref={innerRef}>
      <Rectangle>
        <li>anuka</li>
        <li>gfgf</li>
        <li>hyhyhy</li>
      </Rectangle>
    </Container>
  );
};

export default TestModal;
