import React from "react";
import styled, { css } from "styled-components";

const baseStyle = css`
  color: ${({ color }) => (color ? color : "var(--color-main)")};
  font-weight: ${({ bold }) => (bold ? "700" : "300")};
  margin-top: 0;
  letter-spacing: 1px;
  margin-bottom: ${({ noMargin }) => (noMargin ? "0rem" : "5rem")};
`;

const Heading1 = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  ${baseStyle}
`;
const Heading2 = styled.h2`
  font-size: 2rem;
  ${baseStyle}
`;
const Heading3 = styled.h3`
  font-size: 1.5rem;
  ${baseStyle}
`;
const Heading4 = styled.h4`
  font-size: 1rem;
  ${baseStyle}
`;
const Heading = ({ children, color, noMargin, bold, size }) => {
  if (size === "h1")
    return (
      <Heading1 color={color} noMargin={noMargin} bold={bold}>
        {children}
      </Heading1>
    );
  if (size === "h2")
    return (
      <Heading2 color={color} noMargin={noMargin} bold={bold}>
        {children}
      </Heading2>
    );
  if (size === "h3")
    return (
      <Heading3 color={color} noMargin={noMargin} bold={bold}>
        {children}
      </Heading3>
    );
  if (size === "h4")
    return (
      <Heading4 color={color} noMargin={noMargin} bold={bold}>
        {children}
      </Heading4>
    );
};

export default Heading;
