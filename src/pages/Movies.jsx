import { Box, FormControl, Input, Heading } from '@chakra-ui/react';
import { Blocks } from 'react-loader-spinner';
import Container from 'components/Container';
import MainFilmList from 'components/MainFilmList';
import PageTitle from 'components/PageTitle';
import Button from 'components/Button';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getFilsByTitle } from 'services/api';
const Movies = props => {
  const location = useLocation();

  const [serchParams, setserchParams] = useSearchParams();
  const [searchedFilms, setsearchedFilms] = useState([]);
  const [filmQuery, setfilmQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const filmTitle = serchParams.get('title') ?? '';

  const onFilterChanged = evt => {
    evt.preventDefault();
    if (filmQuery === filmTitle) {
      return alert('Enter new movie Title ^_^');
    }
    setserchParams(filmQuery !== '' ? { title: filmQuery } : {});
  };
  useEffect(() => {
    if (filmTitle === '') {
      return;
    }
    async function getMoviesByTitle() {
      setIsLoading(true);
      setIsEmpty(null);
      const films = await getFilsByTitle(filmTitle);
      if (films.results.length === 0) {
        setIsEmpty(true);
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      setsearchedFilms(films.results);
    }
    getMoviesByTitle();
    setfilmQuery(filmTitle);
  }, [filmTitle]);
  return (
    <main>
      <PageTitle>Search Movies ⬇️</PageTitle>
      <Container>
        <Box p="3">
          <form autoComplete="false" onSubmit={onFilterChanged}>
            <FormControl textAlign="center">
              <Input
                type="text"
                value={filmQuery}
                onChange={evt => setfilmQuery(evt.target.value)}
              />
              <Button type="submit" variant="solid" py="7" px="16" mt="6">
                Search
              </Button>
            </FormControl>
          </form>
        </Box>
        {isEmpty ? (
          <Heading textAlign="center">
            Nothing was found for your request, try again
          </Heading>
        ) : (
          <>
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
            <MainFilmList
              movieList={searchedFilms}
              location={location}
              page={'movies'}
            />
          </>
        )}
      </Container>
    </main>
  );
};

export default Movies;
