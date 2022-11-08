import React from 'react';
// import { FilmList, FilmCard, FilmWraper } from 'pages/Home.styled';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviePoster from './MoviePoster';
import { Wrap, WrapItem } from '@chakra-ui/react';

const MainFilmList = ({ movieList, location, page }) => {
  const currentPage = page === 'home' ? 'movies/' : '';
  return (
    <Wrap spacing="4" justify="center" pt="1">
      {movieList.map(({ id, poster_path }) => (
        <WrapItem
          key={id}
          sx={{
            '&:hover ': {
              outline: 'solid white 1px',
              transition: 'outline 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
          }}
        >
          <NavLink to={`${currentPage}${id}`} state={{ from: location }}>
            <MoviePoster
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : 'https://via.placeholder.com/200x300'
              }
              height="300"
              width="200"
            />
          </NavLink>
        </WrapItem>
      ))}
    </Wrap>
  );
};

MainFilmList.propTypes = {
  movieList: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
};

export default MainFilmList;
