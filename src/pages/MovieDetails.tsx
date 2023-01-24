import Container from 'components/UtilComponents/Container';
import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { getFilmById } from 'services/api';
import { Blocks } from 'react-loader-spinner';
import PageTitle from 'components/UtilComponents/PageTitle';
import MovieDescription from 'components/MoviePageComponents/MovieDescription';
import Button from 'components/UtilComponents/Button';

type MovieIdParams = {
  movieId: string;
};

const MovieDetails: React.FC = props => {
  const [filmDetails, setfilmDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { movieId } = useParams<MovieIdParams>();
  const backLink = location.state?.from ?? '/goit-react-hw-05-movies';

  useEffect(() => {
    async function getFilmDetails() {
      setIsLoading(true);
      const film = await getFilmById(movieId!);
      if (film.response?.status !== undefined) {
        console.log('Error');
        setIsLoading(false);
      } else {
        setfilmDetails(film);
        setIsLoading(false);
      }
    }
    getFilmDetails();
  }, [movieId]);

  return (
    <>
      {!isLoading ? (
        <main>
          {filmDetails !== null ? (
            <Container>
              <Button>
                <NavLink to={backLink}>Go Back</NavLink>
              </Button>
              <MovieDescription
                filmDetails={filmDetails}
                location={location}
                movieId={movieId}
              />
            </Container>
          ) : (
            <Container>
              <PageTitle>Film not found, try again please</PageTitle>
            </Container>
          )}
        </main>
      ) : (
        <main>
          <Box display="flex" justifyContent="center">
            <Blocks
              visible={true}
              height="150"
              width="150"
              ariaLabel="blocks-loading"
              wrapperClass="blocks-wrapper"
            />
          </Box>
        </main>
      )}
    </>
  );
};

export default MovieDetails;
