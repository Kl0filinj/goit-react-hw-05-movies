import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Outlet, Link } from 'react-router-dom';

const MovieAddictionalInfo = ({ location, movieId }) => {
  return (
    <>
      <div>
        <hr />
        <p>Additonal Information</p>
        <ul>
          <li>
            <Link to={'cast'} state={{ ...location.state, movieId: movieId }}>
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={'reviews'}
              state={{ ...location.state, movieId: movieId }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

MovieAddictionalInfo.propTypes = {
  movieId: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default MovieAddictionalInfo;
