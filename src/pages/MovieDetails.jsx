import Container from 'components/Container';
// import MovieAddictionalInfo from 'components/MovieAddictionalInfo';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { getFilmById } from 'services/api';
import PageTitle from 'components/PageTitle';
import MovieDescription from 'components/MovieDescription';
import Button from 'components/Button';

const MovieDetails = props => {
  const [filmDetails, setfilmDetails] = useState(null);
  // const [error, setError] = useState(false);
  const location = useLocation();
  const { movieId } = useParams();
  const backLink = location.state?.from ?? '/goit-react-hw-05-movies';

  useEffect(() => {
    async function getFilmDetails() {
      // setError(false);
      const film = await getFilmById(movieId);
      console.log(film.response?.status);
      if (film.response?.status !== undefined) {
        console.log('Error');
      } else {
        setfilmDetails(film);
      }
    }
    getFilmDetails();
  }, [movieId]);

  if (filmDetails === null) {
    return (
      <main>
        <Container>
          <PageTitle>Film not found, try again please</PageTitle>
        </Container>
      </main>
    );
  }

  return (
    <main>
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
    </main>
  );
};

export default MovieDetails;
