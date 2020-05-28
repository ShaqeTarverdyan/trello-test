import React from "react";
import styled from "styled-components";

import NavItems from "./navItems/NavItems";

const FixedWrapper = styled.header`
  position: fixed;
  background-color: lightgray;
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: left;
`;

const Navbar = ({ isLoggedIn }) => {
  return (
    <FixedWrapper>
      <Wrapper>
        <NavItems isLoggedIn={isLoggedIn} />
      </Wrapper>
    </FixedWrapper>
  );
};

export default Navbar;
