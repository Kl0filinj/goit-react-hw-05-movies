import Container from 'components/Container';
import MainFilmList from 'components/MainFilmList';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getFilsByTitle } from 'services/api';
// import PropTypes from 'prop-types'

const Movies = props => {
  const location = useLocation();

  const [serchParams, setserchParams] = useSearchParams();

  const [searchedFilms, setsearchedFilms] = useState([]);

  const [filmQuery, setfilmQuery] = useState('');

  const filmTitle = serchParams.get('title') ?? '';

  const onFilterChanged = evt => {
    evt.preventDefault();
    if (filmQuery === filmTitle) {
      return alert('Enter new movie Title ^_^');
    }
    setserchParams(filmQuery !== '' ? { title: filmQuery } : {});
  };
  useEffect(() => {
    if (filmTitle === '') {
      return;
    }
    async function getMoviesByTitle() {
      const films = await getFilsByTitle(filmTitle);
      setsearchedFilms(films.results);
    }
    getMoviesByTitle();
    // getFilsByTitle(filmTitle);
  }, [filmTitle]);
  return (
    <Container>
      <main>
        <h1>Search Movies ⬇️</h1>
        <form autoComplete="false" onSubmit={onFilterChanged}>
          <input
            type="text"
            value={filmQuery}
            onChange={evt => setfilmQuery(evt.target.value)}
          />
          <button type="submit">Search ✅</button>
        </form>
        {searchedFilms.length === 0 ? (
          <h2>Find Something ⬆️</h2>
        ) : (
          <MainFilmList
            movieList={searchedFilms}
            location={location}
            page={'movies'}
          />
        )}
      </main>
    </Container>
  );
};

// Movies.propTypes = {}

export default Movies;
