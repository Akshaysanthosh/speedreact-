import React, { useContext } from "react";
import HeaderComponent from "./HeaderComponent";
import HeaderDataComponent from "./HeaderDataComponent";
import { HeaderContext } from "../Store/ContextApi/HeaderContext";
import { useLocation } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import '../../Assets/scss/main.scss';

const HeaderContainer = () => {
  let location = useLocation();
  const headerContext = useContext(HeaderContext);
  const shortHeader = headerContext.shortHeader;

  return (
    <div>
      <HeaderComponent shortHeader={shortHeader}/>
    </div>
  );
};

export default HeaderContainer;
