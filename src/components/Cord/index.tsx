import React, { FC } from "react";
import styled from "styled-components";
import Color from "color";

interface StyleProps {
  color: string;
}

interface IProp extends StyleProps {}

const StyledDiv = styled.div<StyleProps>`
  border-radius: 3px 3px 0 0;
  height: 40px;
  left: 20px;
  position: absolute;
  top: -40px;
  width: 25px;

  ${props => `
    background: linear-gradient(to left, ${Color(props.color).darken(0.2)}, ${
    props.color
  });
  `}
`;

const Cord: FC<IProp> = ({ color }) => {
  return <StyledDiv color={color} />;
};

export default Cord;
