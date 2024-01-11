import { Button, Logo } from "./eclipseLogo.style";
import EclipseLogoIcon from "../../assets/icons/Eclipse-logo.svg";
import { useNavigate } from "react-router-dom";

const EclipseLogo = () => {
  const navigate = useNavigate();

  const navigateToLandingPage = () => {
    navigate("/");
  };

  return (
    <Button onClick={navigateToLandingPage}>
      <Logo src={EclipseLogoIcon} alt="logo" />
    </Button>
  );
};

export default EclipseLogo;
