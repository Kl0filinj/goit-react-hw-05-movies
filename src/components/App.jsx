import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast';
import Layout from './Layout';
import Reviews from './Reviews';

export const App = () => {
  return (
    <Routes>
      {/* <Route path="goit-react-hw-05-movies/" element={<Layout />}> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found 🥶</h1>} />
      </Route>
    </Routes>
  );
};
