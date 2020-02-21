import React, { FC } from "react";
import styled from "styled-components";

interface StyledProps {
  direction: "row" | "column";
}

interface IProps extends StyledProps {}

const StyledDiv = styled.div<StyledProps>`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  ${props => `
    flex-direction: ${props.direction};
  `};
`;

const Container: FC<IProps> = ({ children, direction }) => {
  return <StyledDiv direction={direction}>{children}</StyledDiv>;
};

export default Container;
