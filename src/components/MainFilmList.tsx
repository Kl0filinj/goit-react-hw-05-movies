import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import MoviePoster from './MoviePoster';
import { Wrap, WrapItem } from '@chakra-ui/react';

interface ISingleFilm {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
}

interface ILocation {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: null | ILocation;
}

interface MainFilmListProps {
  movieList: ISingleFilm[];
  location: ILocation;
  page: string;
}

const MainFilmList: React.FC<MainFilmListProps> = ({
  movieList,
  location,
  page,
}) => {
  const currentPage = page === 'home' ? 'movies/' : '';
  return (
    <Wrap spacing="4" justify="center" pt="1">
      {movieList.map(({ id, poster_path }) => (
        <WrapItem
          key={id}
          sx={{
            '&:hover ': {
              outline: 'solid white 1px',
              transition: 'outline 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
          }}
        >
          <NavLink to={`${currentPage}${id}`} state={{ from: location }}>
            <MoviePoster
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : 'https://via.placeholder.com/200x300'
              }
              // @ts-ignore
              height="300"
              width="200"
            />
          </NavLink>
        </WrapItem>
      ))}
    </Wrap>
  );
};

// MainFilmList.propTypes = {
//   movieList: PropTypes.array.isRequired,
//   location: PropTypes.object.isRequired,
//   page: PropTypes.string.isRequired,
// };

export default MainFilmList;
