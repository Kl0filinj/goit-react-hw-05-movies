import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFilmCast } from 'services/api';
// import PropTypes from 'prop-types'

const Cast = props => {
  const [castList, setcastList] = useState([]);
  const location = useLocation();
  const movieId = location.state.movieId;
  useEffect(() => {
    async function getFilmCastInfo() {
      const cast = await getFilmCast(movieId);
      setcastList(cast.cast);
    }
    getFilmCastInfo();
  }, [movieId]);
  return (
    <section>
      <div>
        <ul>
          {castList.map(item => (
            <li key={item.id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : 'https://via.placeholder.com/200x100'
                }
                alt=""
              />
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// Cast.propTypes = {}

export default Cast;
