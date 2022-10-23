import Container from 'components/Container';
import MovieAddictionalInfo from 'components/MovieAddictionalInfo';
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { getFilmById } from 'services/api';
import MovieDescription from 'components/MovieDescription';

const MovieDetails = props => {
  const [filmDetails, setfilmDetails] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();
  const backLink = location.state?.from ?? '/goit-react-hw-05-movies';

  useEffect(() => {
    async function getFilmDetails() {
      const film = await getFilmById(movieId);
      setfilmDetails(film);
    }
    getFilmDetails();
  }, [movieId]);

  if (filmDetails === null) {
    return;
  }

  return (
    <main>
      <Container>
        <NavLink to={backLink}>⬅️ Go Back</NavLink>
        <MovieDescription filmDetails={filmDetails} />
        <MovieAddictionalInfo location={location} movieId={movieId} />
      </Container>
    </main>
  );
};

export default MovieDetails;
