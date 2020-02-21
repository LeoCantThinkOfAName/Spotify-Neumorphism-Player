import React, { FC } from "react";
import styled from "styled-components";

interface StyledProps {
  height: number;
  width: number;
}

interface IProps extends StyledProps {}

const StyledDiv = styled.div<StyledProps>`
  background: #eee;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  z-index: 100;
  ${props => `
    height: ${props.height}px;
    width: ${props.width}px;

    &::after {
      background: rgba(255, 255, 255, 0.3);
      content: "";
      height: ${props.height * 2}px;
      left: 0;
      transform: rotate(45deg);
      top: -90%;
      position: absolute;
      width: ${props.width / 1.5}px;
    }
  `}
`;

const StyledBorder = styled.div`
  border: 10px solid #222;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const Screen: FC<IProps> = ({ height, width, children }) => {
  return (
    <StyledDiv height={height} width={width}>
      <StyledBorder>{children}</StyledBorder>
    </StyledDiv>
  );
};

export default Screen;
