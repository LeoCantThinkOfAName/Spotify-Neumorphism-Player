import React, { FC, useState, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface StyleProps {
  displayColor: string;
  click?: boolean;
}

interface IProp extends StyleProps, ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button<StyleProps>`
  background: #fff;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 1);
  cursor: pointer;
  height: 30px;
  padding: 2px;
  outline: none;
  overflow: hidden;
  margin: 3px;
  width: 30px;

  ${props => `
    span {
      background: ${props.displayColor};
      border-radius: 50%;
      display: block;
      height: 100%;
      width: 100%;
      box-shadow: ${props.click && "inset 2px 2px 8px rgba(0, 0, 0, 0.8)"};
    }
  `}
`;

const ColorBlock: FC<IProp> = ({ displayColor, ...restProps }) => {
  const [click, setClick] = useState<boolean>(false);

  const handlePress = () => {
    setClick(true);
  };

  const handleRelease = () => {
    setClick(false);
  };

  return (
    <StyledButton
      displayColor={displayColor}
      click={click}
      onPointerDown={() => handlePress()}
      onPointerUp={() => handleRelease()}
      {...restProps}
    >
      <span />
    </StyledButton>
  );
};

export default ColorBlock;
