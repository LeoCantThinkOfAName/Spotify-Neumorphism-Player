import React, { FC } from "react";
import Swiper from "react-id-swiper";
import styled from "styled-components";
import "swiper/css/swiper.css";

// types
import { MyPlaylist } from "../../types/playlist";

const StyledImg = styled.img`
  width: 100%;
`;

type SliderType = {
  playlist: MyPlaylist[];
};

const Slider: FC<SliderType> = ({ playlist }) => {
  const params = {
    effect: "coverflow",
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false
    },
    spaceBetween: 0,
    slidesPerView: 2,
    loop: true,
    parallax: true,
    centeredSlides: true,
    simulateTouch: false
  };

  return (
    <Swiper {...params}>
      {playlist.map(track => (
        <div key={track.id} className="swiper-slide">
          <StyledImg src={track.thumbnail} alt={track.albumName} />
        </div>
      ))}
    </Swiper>
  );
};

export default Slider;
