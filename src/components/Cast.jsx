import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFilmCast } from 'services/api';

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
          {castList.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://via.placeholder.com/200x100'
                }
                alt=""
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cast;
