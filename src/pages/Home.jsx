import Container from 'components/Container';
import MainFilmList from 'components/MainFilmList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { getTrendingFilms } from 'services/api';
// import PropTypes from 'prop-types'

const Home = props => {
  const [filmList, setfilmList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    async function getTrendFilms() {
      const films = await getTrendingFilms();
      setfilmList(films.results);
    }
    getTrendFilms();
  }, []);

  return (
    <Container>
      <main>
        <h1>Popular Films ⬇️</h1>
        <MainFilmList movieList={filmList} location={location} page={'home'} />
      </main>
    </Container>
  );
};

export default Home;
