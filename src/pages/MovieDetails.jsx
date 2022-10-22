import Container from 'components/Container';
import React from 'react';
import { useEffect, useState } from 'react';
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
        <NavLink to={backLink}>Go Back ⬅️</NavLink>
        <div style={{ display: 'flex' }}>
          <img
            src={
              filmDetails.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${filmDetails.poster_path}`
                : 'https://via.placeholder.com/500x700'
            }
            alt=""
          />
          <div>
            <h1>{filmDetails.original_title}</h1>
            <p>
              User Score:{' '}
              {`${Math.floor(Number(filmDetails.vote_average) * 10)}%`}
            </p>
            <h2>Overview</h2>
            <p>{filmDetails.overview}</p>
            <h2>Geners</h2>
            <ul>
              {filmDetails.genres.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
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
