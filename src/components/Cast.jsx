import { FilmList } from 'pages/Home.styled';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFilmCast } from 'services/api';
import { ActorPreview, ActorWrapper } from './Cast.styled';

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
        <h2>Cast of </h2>
        <FilmList>
          {castList.map(({ id, profile_path, name, character }) => (
            <ActorWrapper key={id}>
              <ActorPreview
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://via.placeholder.com/200x100'
                }
                alt=""
                width="140"
                height="140"
              />
              {/* <p>{name}</p>
              <p>Character: {character}</p> */}
            </ActorWrapper>
          ))}
        </FilmList>
      </div>
    </section>
  );
};

export default Cast;
