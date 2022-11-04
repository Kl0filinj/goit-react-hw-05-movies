import PropTypes from 'prop-types';
import {
  FilmTitle,
  FilmDescriptionWrapper,
  FilmGener,
} from 'pages/MovieDetails.styled';
import MoviePoster from './MoviePoster';
import {
  DescriptionCategory,
  DescriptionWrapper,
} from './MovieDescription.styled';
import MovieAddictionalInfo from './MovieAddictionalInfo';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MovieDescription = ({ filmDetails, location, movieId }) => {
  const { poster_path, original_title, vote_average, overview, genres } =
    filmDetails;
  const voteAveragePercent = Math.floor(Number(vote_average) * 10);

  return (
    <>
      {' '}
      <FilmDescriptionWrapper>
        <MoviePoster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://via.placeholder.com/300x450'
          }
          width="300"
          height="450"
        />

        <DescriptionWrapper>
          <DescriptionCategory>
            <FilmTitle>{original_title}</FilmTitle>
          </DescriptionCategory>
          <DescriptionCategory>
            <h2>User Rate</h2>
            <p>{` ${voteAveragePercent}%`}</p>
          </DescriptionCategory>
          <DescriptionCategory>
            <h2>Overview</h2>
            <p>{overview}</p>
          </DescriptionCategory>
          <DescriptionCategory>
            <h2>Geners</h2>
            <ul style={{ display: 'flex' }}>
              {genres.map(({ id, name }) => (
                <FilmGener key={id}>{name}</FilmGener>
              ))}
            </ul>
          </DescriptionCategory>
          <DescriptionCategory>
            <MovieAddictionalInfo location={location} movieId={movieId} />
          </DescriptionCategory>
        </DescriptionWrapper>
      </FilmDescriptionWrapper>
      <FilmDescriptionWrapper>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </FilmDescriptionWrapper>
    </>
  );
};

MovieDescription.propTypes = {
  filmDetails: PropTypes.object.isRequired,
};

export default MovieDescription;
