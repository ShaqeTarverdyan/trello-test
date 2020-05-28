import React from "react";
import styled from "styled-components";

import NavItem from "./NavItem";

const Nav = styled.nav`
  display: flex;
  margin-top: ${(props) => (props.mobile ? "-6rem" : null)};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  align-items: center;
  height: 100%;
`;

const NavItems = ({ mobile, clicked, isLoggedIn }) => {
  return (
    <Nav mobile={mobile}>
      <Ul mobile={mobile}>
        {isLoggedIn && (
          <NavItem mobile={mobile} clicked={clicked} link="/">
            Todos
          </NavItem>
        )}
        {!isLoggedIn && (
          <NavItem mobile={mobile} clicked={clicked} link="/login">
            Login
          </NavItem>
        )}
        {!isLoggedIn && (
          <NavItem mobile={mobile} clicked={clicked} link="/signup">
            Signup
          </NavItem>
        )}
        {isLoggedIn && (
          <NavItem mobile={mobile} clicked={clicked} link="/logOut">
            LogOut
          </NavItem>
        )}
      </Ul>
    </Nav>
  );
};

export default NavItems;
