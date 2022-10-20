import Container from 'components/Container';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { getTrendingFilms } from 'services/api';
import { FilmList, FilmCard, FilmWraper } from './Home.styled';
// import PropTypes from 'prop-types'

const Home = props => {
  const [filmList, setfilmList] = useState([]);

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
        <h1>Populare Films ⬇️</h1>
        <FilmList>
          {filmList.map(item => (
            <FilmWraper key={item.id}>
              <FilmCard to={`movies/${item.id}`}>
                <img
                  src={
                    item.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                      : 'https://via.placeholder.com/200x100'
                  }
                  alt=""
                  width="200"
                />
                <div style={{ maxWidth: '200px', padding: '10px' }}>
                  <p>{item.title ?? item.name}</p>
                </div>
              </FilmCard>
            </FilmWraper>
          ))}
        </FilmList>
      </main>
    </Container>
  );
};

export default Home;
