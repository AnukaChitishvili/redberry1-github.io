import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import useOutsideClickHandler from "../helpers/other/outsideClickHandler";
import {
  Container,
  PopUpWrapper,
  SuccessIcon,
  Title,
  ButtonWrapper,
} from "./popUp.style";
import Button from "../components/button/Button";
import PopUpIcon from "../assets/icons/Pop-up-icon.svg";

const PopUp = ({ togglePopUp = () => {}, what = () => {} }) => {
  const popUpRef = useRef();
  const navigate = useNavigate();
  const navigateToLaptopList = () => {
    navigate("/laptop-list");
  };
  const navigateToLandingPage = () => {
    navigate("/");
  };

  useOutsideClickHandler(popUpRef, () => {
    togglePopUp();
  });

  return (
    <Container>
      <PopUpWrapper ref={popUpRef}>
        <SuccessIcon src={PopUpIcon} alt="success" />
        <Title>ჩანაწერი დამატებულია!</Title>
        <ButtonWrapper isFirst>
          <Button
            text="სიაში გადაყვანა"
            onClick={navigateToLaptopList}
            isPopUp
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            text="მთავარი"
            onClick={navigateToLandingPage}
            isTransparent
            isBlue
            isPopUp
          />
        </ButtonWrapper>
      </PopUpWrapper>
    </Container>
  );
};

export default PopUp;
