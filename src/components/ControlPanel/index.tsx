import React, { useContext } from "react";

// contexts
import { ThemeContext } from "../../contexts/ThemeContext";
import { SpotifyContext } from "../../contexts/SpotifyContext";

// components
import Container from "../Container";
import Button from "../Button";

// utils
import navigateSongs from "../../utils/navigateSongs";

const ControlPanel = () => {
  const { theme } = useContext(ThemeContext);
  const { token, deviceId } = useContext(SpotifyContext);

  const handleClick = async (direction: "next" | "previous") => {
    if (token && deviceId) {
      const id = await navigateSongs({
        direction,
        token,
        deviceId
      });

      console.log(id);
    }
  };

  return (
    <Container direction="row">
      <Button
        size={50}
        bg={theme}
        title="Previous track"
        onClick={() => handleClick("previous")}
      >
        Prev
      </Button>
      <Button size={70} bg={theme} title="Play/Pause">
        Play
      </Button>
      <Button
        size={50}
        bg={theme}
        title="Next track"
        onClick={() => handleClick("next")}
      >
        Next
      </Button>
    </Container>
  );
};

export default ControlPanel;
