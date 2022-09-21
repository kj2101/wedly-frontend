import React from "react";
import { FormattedMessage } from "react-intl";
import NavBar from "./NavBar";
import HeaderLink from "./HeaderLink";
import messages from "./messages";

function Header() {
  return (
    <NavBar>
      <HeaderLink to="/">
        <FormattedMessage {...messages.home} />
      </HeaderLink>
      <HeaderLink to="/features">
        <FormattedMessage {...messages.features} />
      </HeaderLink>
    </NavBar>
  );
}

export default Header;
