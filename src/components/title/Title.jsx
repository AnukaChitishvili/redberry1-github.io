import { useLocation } from "react-router-dom";

import {
  TitleWrapper,
  TitleBorderWrapper,
  TitleText,
  MobileTitleWrapper,
  TitleTextMobile,
  Page,
} from "./title.style";
import Border from "../border/Border";

const Title = ({ text, currentPage, isFirstPage }) => {
  const location = useLocation();

  return (
    <>
      <TitleWrapper>
        <TitleBorderWrapper>
          <TitleText isFirst>თანამშრომლის ინფო</TitleText>
          {location.pathname === "/new-laptop/employee-info" && <Border />}
        </TitleBorderWrapper>
        <TitleBorderWrapper>
          <TitleText>ლეპტოპის მახასიათებლები</TitleText>
          {location.pathname === "/new-laptop/laptop-info" && <Border />}
        </TitleBorderWrapper>
      </TitleWrapper>
      <MobileTitleWrapper isFirstPage={isFirstPage}>
        <TitleTextMobile>{text}</TitleTextMobile>
        <Page>{currentPage}</Page>
      </MobileTitleWrapper>
    </>
  );
};

export default Title;
