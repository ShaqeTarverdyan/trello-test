import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navigation/Navbar";
import { connect } from "react-redux";

const MainWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
`;

const Layout = ({ children, isLoggedIn }) => (
  <>
    <Navbar isLoggedIn={isLoggedIn} />
    <MainWrapper>{children}</MainWrapper>
  </>
);

const mapStateToProps = ({ firebase }) => ({
  isLoggedIn: firebase.auth.uid ? true : false,
});

export default connect(mapStateToProps)(Layout);
