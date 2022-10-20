import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingFilms } from 'services/api';
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

  //   if (filmList.length !== 0) {
  //     return;
  //   }
  return (
    <main>
      <h1>Populare Films ⬇️</h1>
      {filmList.map(item => (
        <li key={item.id}>
          <Link to={`movies/${item.id}`}>{item.title ?? item.name}</Link>
        </li>
      ))}
    </main>
  );
};

// Home.propTypes = {}

export default Home;
