import React, { useContext, useState, useEffect, useRef, useMemo } from "react";
import styled from "styled-components";

// context
import { PlayerContext } from "../../contexts/PlayerContext/PlayerContext";
import { PlaylistContext } from "../../contexts/PlaylistContext/PlaylistContext";

// utilities
import { progressFormatter } from "../../utils/timeFormatter";

const ProgressContainer = styled.div`
  align-items: center;
  display: flex;
  width: 95%;

  span {
    display: block;
    font-size: 12px;
    margin: 0 5px;
    width: 30px;
    transform: scale(0.8);
  }
`;

const ProgressBar = styled.div`
  background: #555;
  height: 1px;
  position: relative;
  width: 100%;

  .indicator {
    border-radius: 50%;
    left: 0;
    position: absolute;
    top: -2px;
    left: 0;
    height: 5px;
    width: 5px;
    background: #555;
    transform-origin: left;
    transform: translateX(0px);
  }
`;

const Progress = () => {
  const { playlist, currentId } = useContext(PlaylistContext);
  const { currentPosition } = useContext(PlayerContext);
  const [position, setPosition] = useState<number>(currentPosition);
  const songLength = useMemo(() => {
    const current = playlist.filter(track => track.id === currentId)[0];

    if (current) {
      return current.duration;
    }
    return null;
  }, [currentId, playlist]);
  const inter = useRef<any>(null);

  useEffect(() => {
    if (inter.current) {
      inter.current.clearInterval();
    }

    inter.current = setInterval(() => {
      setPosition(prevState => {
        return (prevState += 1000);
      });
    }, 1000);
  }, []);

  useEffect(() => {
    setPosition(currentPosition);
  }, [currentPosition]);

  return (
    <ProgressContainer>
      <span>{progressFormatter(position)}</span>
      <ProgressBar>
        <div
          className="indicator"
          style={{
            transform: `translateX(${
              position === 0 ? 0 : songLength ? 125 : 0
            }px)`,
            transition: `${
              position === 0 ? 0 : songLength ? songLength / 1000 : 0
            }s linear`
          }}
        />
      </ProgressBar>
      <span>{songLength ? progressFormatter(songLength) : "00:00"}</span>
    </ProgressContainer>
  );
};

export default Progress;
