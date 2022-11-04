import PropTypes from 'prop-types';
import { HeaderLink } from './Layout.styled';

const MovieAddictionalInfo = ({ location, movieId }) => {
  return (
    <>
      <h2>Additonal Information</h2>
      <ul>
        <li>
          <HeaderLink
            to={'cast'}
            state={{ ...location.state, movieId: movieId }}
          >
            Cast
          </HeaderLink>
        </li>
        <li>
          <HeaderLink
            to={'reviews'}
            state={{ ...location.state, movieId: movieId }}
          >
            Reviews
          </HeaderLink>
        </li>
      </ul>
    </>
  );
};

MovieAddictionalInfo.propTypes = {
  movieId: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default MovieAddictionalInfo;
