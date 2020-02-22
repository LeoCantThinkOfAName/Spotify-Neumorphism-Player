import React, { FC, useState, useContext } from "react";
import styled from "styled-components";

// context
import { GlobalContext } from "../../contexts/GlobalContext";

interface StyleProps {
  color: string;
  click?: boolean;
  title?: string;
}

interface IProp extends StyleProps {}

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
      background: ${props.color};
      border-radius: 50%;
      display: block;
      height: 100%;
      width: 100%;
      box-shadow: ${props.click && "inset 2px 2px 8px rgba(0, 0, 0, 0.8)"};
    }
  `}
`;

const ColorBlock: FC<IProp> = ({ color, title }) => {
  const [click, setClick] = useState<boolean>(false);
  const { setTheme } = useContext(GlobalContext);

  const handlePress = () => {
    setClick(true);
  };

  const handleRelease = () => {
    setClick(false);
    setTheme(color);
  };

  return (
    <StyledButton
      color={color}
      click={click}
      onPointerDown={() => handlePress()}
      onPointerUp={() => handleRelease()}
      title={title}
    >
      <span />
    </StyledButton>
  );
};

export default ColorBlock;
