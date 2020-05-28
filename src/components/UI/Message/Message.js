import React from "react";
import styled from "styled-components";

const P = styled.p`
  color: ${({ error, success }) => {
    if (error) return "var(--color-error)";
    if (success) return "green";
    else return "var(--color-text)";
  }};
  font-size: 1rem;
  font-weight: 700;
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: translateY(${({ show }) => (show ? "25px" : "0px")});
  transition: all 0.2s;
`;
const Message = ({ children, error, success, show }) => {
  return (
    <P error={error} success={success} show={show}>
      {children}
    </P>
  );
};

export default Message;
