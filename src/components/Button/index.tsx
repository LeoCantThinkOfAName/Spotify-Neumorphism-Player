import React, {
  ButtonHTMLAttributes,
  FC,
  useState,
  memo,
  useCallback
} from "react";
import styled from "styled-components";

// utilities
import Color from "color";

interface StyleProps {
  pressed?: boolean;
  size: number;
  bg: string;
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
        0.2
      )}, ${Color(props.bg).darken(0.4)});
      box-shadow: -10px -5px 20px ${Color(props.bg).lighten(
        0.25
      )}, 10px 5px 20px ${Color(props.bg).darken(0.5)};
      `;
    }
  }}
`;

const Button: FC<IProp> = ({ children, size, bg, title, ...restProp }) => {
  const [click, setClick] = useState<boolean>(false);

  const handlePress = useCallback(() => {
    setClick(true);
  }, []);

  const handleRelease = useCallback(() => {
    setClick(false);
  }, []);

  return (
    <StyledButton
      {...restProp}
      onPointerDown={handlePress}
      onPointerUp={handleRelease}
      pressed={click}
      title={title}
      size={size}
      bg={bg}
    >
      {children}
    </StyledButton>
  );
};

export default memo(Button);
