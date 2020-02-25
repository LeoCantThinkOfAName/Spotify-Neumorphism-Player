import React, { FC, useContext, useEffect } from "react";
import styled from "styled-components";

// context
import { PlaylistContext } from "../../contexts/PlaylistContext/PlaylistContext";

// custom hook
import usePlaylist from "../../hooks/usePlaylist";

// components
import LoginButton from "../LoginButton";
import Header from "../Header/index";
import Slider from "../Slider";

// action type
import { SET_PLAYLIST } from "../../contexts/actionTypes";

interface StyledProps {
  height: number;
  width: number;
  powerOn: boolean;
}

interface IProps extends StyledProps {
  token: string | null;
  playlistId: string;
}

const StyledDiv = styled.div<StyledProps>`
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  z-index: 100;
  ${props => `
    background: ${props.powerOn ? "#eee" : "#000"};
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
      z-index: 100;
    }
  `}
`;

const StyledBorder = styled.div`
  align-items: center;
  border: solid #222;
  border-width: 10px 10px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: absolute;
  overflow: hidden;
  width: 100%;
`;

const StyledLabel = styled.div`
  align-items: center;
  background: #222;
  color: #aaa;
  display: flex;
  font-weight: 600;
  font-size: 12px;
  height: 30px;
  justify-content: center;
  width: 100%;
`;

const Screen: FC<IProps> = ({ height, width, powerOn, token, playlistId }) => {
  const { playlist, currentId, dispatchPlaylist } = useContext(PlaylistContext);
  const fetchPlayList = usePlaylist({ token, playlistId });

  useEffect(() => {
    if (fetchPlayList) {
      dispatchPlaylist({ type: SET_PLAYLIST, payload: fetchPlayList });
    }
  }, [fetchPlayList, dispatchPlaylist]);

  return (
    <StyledDiv height={height} width={width} powerOn={powerOn}>
      <StyledBorder>
        {powerOn ? <Header /> : <div />}
        {!powerOn && <LoginButton />}
        {powerOn && playlist.length > 0 && (
          <Slider playlist={playlist} currentId={currentId} />
        )}
        <StyledLabel>Walkmeh</StyledLabel>
      </StyledBorder>
    </StyledDiv>
  );
};

export default Screen;
