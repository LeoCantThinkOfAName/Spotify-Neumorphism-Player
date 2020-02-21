import React, { FC } from "react";
import styled from "styled-components";

interface StyledProps {
  bg: string;
}

interface IProp extends StyledProps {}

const StyledDiv = styled.div<StyledProps>`
  border-radius: 10px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
  display: inline-flex;
  flex-direction: column;
  padding: 15px 15px 25px;
  ${props => `
    background: ${props.bg};
  `}
`;

const Body: FC<IProp> = ({ children, bg }) => {
  return <StyledDiv bg={bg}>{children}</StyledDiv>;
};

export default Body;
