import React, { useContext, useState, useEffect, useRef, useMemo } from "react";
import styled from "styled-components";

// context
import { PlayerContext } from "../../contexts/PlayerContext/PlayerContext";
import { PlaylistContext } from "../../contexts/PlaylistContext/PlaylistContext";

// utilities
import { progressFormatter } from "../../utils/timeFormatter";

type ProgressBarType = {
  percentage: number;
};

const ProgressContainer = styled.div`
  align-items: center;
  display: flex;
  width: 95%;

  span {
    display: block;
    font-size: 10px;
    margin: 0 5px;
    width: 30px;
  }
`;

const ProgressBar = styled.div<ProgressBarType>`
  background: #555;
  height: 1px;
  position: relative;
  width: 100%;

  &::after {
    content: "";
    border-radius: 50%;
    position: absolute;
    top: -3px;
    left: 0;
    height: 8px;
    width: 8px;
    background: #555;

    ${props => `
      transform: translateX(${props.percentage * 100}%);
    `}
  }
`;

const Progress = () => {
  const { playlist, currentId } = useContext(PlaylistContext);
  const { currentPosition } = useContext(PlayerContext);
  const [position, setPosition] = useState<number>(currentPosition);
  const songLength = useMemo(() => {
    const current = playlist.filter(track => track.id === currentId)[0];

    if (current) {
      return current.duration / 1000;
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
        return (prevState += 1);
      });
    }, 1000);
  }, []);

  useEffect(() => {
    setPosition(currentPosition);
  }, [currentPosition]);

  return (
    <ProgressContainer>
      <span>{progressFormatter(position)}</span>
      <ProgressBar percentage={songLength ? position / songLength : 0} />
      <span>{songLength ? progressFormatter(songLength) : "00:00"}</span>
    </ProgressContainer>
  );
};

export default Progress;
