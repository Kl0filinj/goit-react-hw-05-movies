import React from 'react';
import { FilmList, FilmCard, FilmWraper } from 'pages/Home.styled';
import PropTypes from 'prop-types';

const MainFilmList = ({ movieList, location, page }) => {
  const currentPage = page === 'home' ? 'movies/' : '';
  return (
    <FilmList>
      {movieList.map(({ id, poster_path, title = null, name = null }) => (
        <FilmWraper key={id}>
          <FilmCard to={`${currentPage}${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : 'https://via.placeholder.com/200x300'
              }
              alt=""
              height="300"
              width="200"
            />
            <div style={{ maxWidth: '180px', padding: '10px' }}>
              <p>{title ?? name}</p>
            </div>
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
