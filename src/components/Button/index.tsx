import React, { ButtonHTMLAttributes, FC, useState } from "react";
import styled from "styled-components";

// utilities
import Color from "color";

interface StyleProps {
  size: number;
  bg: string;
  pressed?: boolean;
}

interface IProp extends ButtonHTMLAttributes<HTMLButtonElement>, StyleProps {}

const StyledButton = styled.button<StyleProps>`
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  margin: 10px;
  outline: none;
  ${props => `
    align-items: center;
    color: ${Color(props.bg).darken(0.5)};
    display: inline-flex;
    font-size: ${props.size * 0.2}px;
    font-weight: 800;
    height: ${props.size}px;
    justify-content: center;
    transition: .1s linear;
    text-shadow: 1px 1px 3px rgba(255, 255, 255, .4);
    width: ${props.size}px;
  `}
  ${props => {
    if (props.pressed) {
      return `
      background: linear-gradient(145deg, ${Color(props.bg).darken(
        0.1
      )}, ${Color(props.bg).lighten(0.1)});
      box-shadow: -10px -5px 20px ${Color(props.bg).lighten(
        0.2
      )}, 10px 5px 20px ${Color(props.bg).darken(0.1)};
      `;
    } else {
      return `
      background: linear-gradient(145deg, ${Color(props.bg).lighten(
        0.25
      )}, ${Color(props.bg).darken(0.35)});
      box-shadow: -10px -5px 20px ${Color(props.bg).lighten(
        0.3
      )}, 10px 5px 20px ${Color(props.bg).darken(0.5)};
      `;
    }
  }}
`;

const Button: FC<IProp> = ({ children, size, bg, ...restProp }) => {
  const [click, setClick] = useState<boolean>(false);

  const handlePress = () => {
    setClick(true);
  };

  const handleRelease = () => {
    setClick(false);
  };

  return (
    <StyledButton
      {...restProp}
      onPointerDown={() => handlePress()}
      onPointerUp={() => handleRelease()}
      pressed={click}
      size={size}
      bg={bg}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
