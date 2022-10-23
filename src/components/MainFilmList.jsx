import React from 'react';
import { FilmList, FilmCard, FilmWraper } from 'pages/Home.styled';

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
                  : 'https://via.placeholder.com/200x100'
              }
              alt=""
              width="200"
            />
            <div style={{ maxWidth: '200px', padding: '10px' }}>
              <p>{title ?? name}</p>
            </div>
          </FilmCard>
        </FilmWraper>
      ))}
    </FilmList>
  );
};

export default MainFilmList;
