import React from 'react';
// import { FilmPoster } from 'pages/Home.styled';
import { Image } from '@chakra-ui/react';
const MoviePoster = ({ src, ...props }) => {
  return <Image src={src} alt="" borderTopRadius="base" {...props} />;
};

export default MoviePoster;
