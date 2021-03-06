import { styled } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import { bannerData } from '../../constants/data';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Image = styled('img')({
  width: '100%',
  height: 250,
});

const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlaySpeed={2000}
    >
      {bannerData.map((data) => (
        <Image src={data.url} alt="banner" />
      ))}
    </Carousel>
  );
};

export default Banner;
