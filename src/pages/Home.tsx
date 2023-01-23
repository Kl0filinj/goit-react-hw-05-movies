import React from 'react';
import Container from 'components/Container';
import MainFilmList from 'components/MainFilmList';
// @ts-ignore
import PageTitle from 'components/PageTitle';
// @ts-ignore
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// @ts-ignore
import { getTrendingFilms } from 'services/api';
import { Blocks } from 'react-loader-spinner';
import { Box } from '@chakra-ui/react';

const Home: React.FC = props => {
  
  const [filmList, setfilmList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function getTrendFilms() {
      setIsLoading(true);
      const films = await getTrendingFilms();
      setfilmList(films.results);
      setIsLoading(false);
    }
    getTrendFilms();
  }, []);

  return (
    <main>
      <PageTitle>Popular Films</PageTitle>
      <Container>
        {isLoading && (
          <Box display="flex" justifyContent="center">
            <Blocks
              visible={true}
              height="150"
              width="150"
              ariaLabel="blocks-loading"
              wrapperClass="blocks-wrapper"
            />
          </Box>
        )}
        <MainFilmList movieList={filmList} location={location} page={'home'} />
      </Container>
    </main>
  );
};

export default Home;
