import React from 'react';
import { FilmPoster } from 'pages/Home.styled';

const MoviePoster = ({ src, width, height }) => {
  return <FilmPoster src={src} alt="" width={width} height={height} />;
};

export default MoviePoster;
