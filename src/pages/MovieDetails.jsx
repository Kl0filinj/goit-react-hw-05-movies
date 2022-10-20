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
  return <div>{filmDetails.original_title}</div>;
};

// MovieDetails.propTypes = {}

export default MovieDetails;
