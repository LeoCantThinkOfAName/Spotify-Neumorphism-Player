import React from "react";
import styled from "styled-components";

// components
import ColorBlock from "./ColorBlock";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

const Palette = () => {
  return (
    <StyledDiv>
      <ColorBlock color="#ff0037" title="Red" />
      <ColorBlock color="#ff5e00" title="Orange" />
      <ColorBlock color="#ffbf00" title="Yellow" />
      <ColorBlock color="#04e0a6" title="Turquoise" />
      <ColorBlock color="#5c04e0" title="Violet" />
      <ColorBlock color="#555555" title="Black" />
      <ColorBlock color="#e3e3e3" title="White" />
    </StyledDiv>
  );
};

export default Palette;
