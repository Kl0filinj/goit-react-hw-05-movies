import React from 'react';
import { FilmPoster } from 'pages/Home.styled';

const MoviePoster = ({ src, ...props }) => {
  return <FilmPoster src={src} alt="" {...props} />;
};

export default MoviePoster;
