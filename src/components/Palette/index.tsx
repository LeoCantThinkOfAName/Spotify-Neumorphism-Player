import React, { FC, useContext, useMemo } from "react";
import styled from "styled-components";

// context
import { ThemeContext } from "../../contexts/ThemeContext";

// components
import ColorBlock from "./ColorBlock";
import { CHANGE_THEME } from "../../reducers/actionTypes";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

const Palette: FC = () => {
  const colorArr = useMemo(
    () => [
      { displayColor: "#ff0037", title: "Red" },
      { displayColor: "#ff5e00", title: "Orange" },
      { displayColor: "#ffbf00", title: "Yellow" },
      { displayColor: "#04e0a6", title: "Turquoise" },
      { displayColor: "#5c04e0", title: "Violet" },
      { displayColor: "#555555", title: "Black" },
      { displayColor: "#e3e3e3", title: "White" }
    ],
    []
  );
  const { dispatchTheme } = useContext(ThemeContext);

  return useMemo(
    () => (
      <StyledDiv>
        {colorArr.map((item, index) => (
          <ColorBlock
            key={index}
            title={item.title}
            displayColor={item.displayColor}
            onClick={() =>
              dispatchTheme({
                type: CHANGE_THEME,
                payload: item.displayColor
              })
            }
          />
        ))}
      </StyledDiv>
    ),
    []
  );
};

export default Palette;
