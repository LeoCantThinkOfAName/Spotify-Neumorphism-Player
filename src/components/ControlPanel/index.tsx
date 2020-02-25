import React, { useContext, useEffect, memo } from "react";

// contexts
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import { SpotifyContext } from "../../contexts/SpotifyContext/SpotifyContext";
import { PlayerContext } from "../../contexts/PlayerContext/PlayerContext";

// components
import Container from "../Container";
import Button from "../Button";

// utils
import navigateSongs from "../../utils/navigateSongs";

// action type
import { SET_PAUSE } from "../../contexts/actionTypes";

const ControlPanel = () => {
  const { theme } = useContext(ThemeContext);
  const { token, deviceId } = useContext(SpotifyContext);
  const { pause, dispatchPlayer } = useContext(PlayerContext);

  const handleClick = async (direction: "next" | "previous") => {
    if (token && deviceId) {
      navigateSongs({
        direction,
        token,
        deviceId
      });
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
      <Button
        size={70}
        bg={theme}
        title="Play/Pause"
        onClick={() => dispatchPlayer({ type: SET_PAUSE, payload: !pause })}
      >
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

export default memo(ControlPanel);
