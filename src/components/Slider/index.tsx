import React, { FC, useState, useEffect } from "react";
import Swiper, { SwiperInstance } from "react-id-swiper";
import styled from "styled-components";
import "swiper/css/swiper.css";

// types
import { MyPlaylist } from "../../types/playlist";

const StyledImg = styled.img`
  width: 100%;
`;

type SliderType = {
  playlist: MyPlaylist[];
  currentId: string;
};

const Slider: FC<SliderType> = ({ playlist, currentId }) => {
  const [swiper, updateSwiper] = useState<SwiperInstance | null>(null);
  const slidePosition = playlist.findIndex(track => track.id === currentId);

  useEffect(() => {
    if (slidePosition !== -1) {
      swiper.slideTo(slidePosition + 2);
    }
  }, [slidePosition, swiper]);

  const params = {
    effect: "coverflow",
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false
    },
    loop: true,
    loopedSlides: 2,
    spaceBetween: 0,
    slidesPerView: 2,
    parallax: true,
    centeredSlides: true,
    simulateTouch: false
  };

  return (
    <Swiper {...params} getSwiper={updateSwiper}>
      {playlist.map(track => (
        <div key={track.id} className="swiper-slide">
          <StyledImg src={track.thumbnail} alt={track.albumName} />
        </div>
      ))}
    </Swiper>
  );
};

export default Slider;
