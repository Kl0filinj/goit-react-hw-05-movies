import Container from 'components/Container';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmById } from 'services/api';
// import PropTypes from 'prop-types'

const MovieDetails = props => {
  const [filmDetails, setfilmDetails] = useState(null);
  // const [loading, setloading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    async function getFilmDetails() {
      const film = await getFilmById(movieId);
      setfilmDetails(film);
    }
    getFilmDetails();
  }, [movieId]);

  // if (!loading) {
  if (filmDetails === null) {
    return;
  }
  return (
    <main>
      <Container>
        <div style={{ display: 'flex' }}>
          <img
            src={
              filmDetails.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${filmDetails.poster_path}`
                : 'https://via.placeholder.com/500x700'
            }
            alt=""
          />
          <h1>Film Title: {filmDetails.original_title}</h1>
        </div>
      </Container>
    </main>
  );
};

// MovieDetails.propTypes = {}

export default MovieDetails;
