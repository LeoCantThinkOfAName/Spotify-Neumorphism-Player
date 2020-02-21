import React, { ButtonHTMLAttributes, FC, useState, useRef } from "react";
import styled from "styled-components";

// utilities
import LightenDarkenColor from "../../utils/LightenDarkenColor";

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
  margin: 5px;
  outline: none;
  ${props => `
    align-items: center;
    color: ${LightenDarkenColor(props.bg, -40)};
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
      background: linear-gradient(145deg, ${LightenDarkenColor(
        props.bg,
        -10
      )}, ${LightenDarkenColor(props.bg, 10)});
      box-shadow: -10px -5px 20px ${LightenDarkenColor(
        props.bg,
        20
      )}, 10px 5px 20px ${LightenDarkenColor(props.bg, -20)};
      `;
    } else {
      return `
      background: linear-gradient(145deg, ${LightenDarkenColor(
        props.bg,
        25
      )}, ${LightenDarkenColor(props.bg, -25)});
      box-shadow: -10px -5px 20px ${LightenDarkenColor(
        props.bg,
        30
      )}, 10px 5px 20px ${LightenDarkenColor(props.bg, -50)};
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
