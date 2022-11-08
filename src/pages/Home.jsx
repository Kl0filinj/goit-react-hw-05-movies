import Container from 'components/Container';
import MainFilmList from 'components/MainFilmList';
import PageTitle from 'components/PageTitle';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingFilms } from 'services/api';

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
    <main>
      <PageTitle>Popular Films</PageTitle>
      <Container>
        <MainFilmList movieList={filmList} location={location} page={'home'} />
      </Container>
    </main>
  );
};

export default Home;
