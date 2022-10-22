import Container from 'components/Container';
import React from 'react';
import { useEffect, useState } from 'react';
import {
  FilmTitle,
  FilmDescriptionWrapper,
  FilmGener,
} from './MovieDetails.styled';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getFilmById } from 'services/api';
// import PropTypes from 'prop-types'

const MovieDetails = props => {
  const [filmDetails, setfilmDetails] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    async function getFilmDetails() {
      const film = await getFilmById(movieId);
      setfilmDetails(film);
    }
    getFilmDetails();
  }, [movieId]);

  if (filmDetails === null) {
    return;
  }
  return (
    <main>
      <Container>
        <NavLink to={backLink}>⬅️ Go Back</NavLink>
        <FilmDescriptionWrapper>
          <img
            width="300"
            height="450"
            src={
              filmDetails.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${filmDetails.poster_path}`
                : 'https://via.placeholder.com/500x700'
            }
            alt=""
          />
          <div style={{ maxWidth: '700px' }}>
            <FilmTitle>{filmDetails.original_title}</FilmTitle>
            <p>
              User Rate:
              <b>{` ${Math.floor(Number(filmDetails.vote_average) * 10)}%`}</b>
            </p>
            <h2>Overview</h2>
            <p>{filmDetails.overview}</p>
            <h2>Geners</h2>
            <ul style={{ display: 'flex' }}>
              {filmDetails.genres.map(item => (
                <FilmGener key={item.id}>{item.name}</FilmGener>
              ))}
            </ul>
          </div>
        </FilmDescriptionWrapper>
        <div>
          <hr />
          <p>Additonal Information</p>
          <ul>
            <li>
              <Link to={'cast'} state={{ movieId: movieId }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to={'reviews'} state={{ movieId: movieId }}>
                Reviews
              </Link>
            </li>
          </ul>

          <hr />
        </div>
        <Outlet />
      </Container>
    </main>
  );
};

// MovieDetails.propTypes = {}

export default MovieDetails;
