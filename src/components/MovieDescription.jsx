import PropTypes from 'prop-types';
import {
  FilmTitle,
  FilmDescriptionWrapper,
  FilmGener,
} from 'pages/MovieDetails.styled';
import MoviePoster from './MoviePoster';

const MovieDescription = ({ filmDetails }) => {
  const { poster_path, original_title, vote_average, overview, genres } =
    filmDetails;
  const voteAveragePercent = Math.floor(Number(vote_average) * 10);

  return (
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
      <div style={{ maxWidth: '700px' }}>
        <FilmTitle>{original_title}</FilmTitle>
        <p>
          User Rate:
          <b>{` ${voteAveragePercent}%`}</b>
        </p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Geners</h2>
        <ul style={{ display: 'flex' }}>
          {genres.map(({ id, name }) => (
            <FilmGener key={id}>{name}</FilmGener>
          ))}
        </ul>
      </div>
    </FilmDescriptionWrapper>
  );
};

MovieDescription.propTypes = {
  filmDetails: PropTypes.object.isRequired,
};

export default MovieDescription;
