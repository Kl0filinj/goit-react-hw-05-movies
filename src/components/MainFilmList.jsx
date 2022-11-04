import React from 'react';
import { FilmList, FilmCard, FilmWraper } from 'pages/Home.styled';
import PropTypes from 'prop-types';
import MoviePoster from './MoviePoster';

const MainFilmList = ({ movieList, location, page }) => {
  const currentPage = page === 'home' ? 'movies/' : '';
  return (
    <FilmList>
      {movieList.map(({ id, poster_path }) => (
        <FilmWraper key={id}>
          <FilmCard to={`${currentPage}${id}`} state={{ from: location }}>
            <MoviePoster
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : 'https://via.placeholder.com/200x300'
              }
              height="300"
              width="200"
            />
          </FilmCard>
        </FilmWraper>
      ))}
    </FilmList>
  );
};

MainFilmList.propTypes = {
  movieList: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
};

export default MainFilmList;
