import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));
const Cast = lazy(() => import('./Cast'));
const Layout = lazy(() => import('./Layout'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      {/* <Route path="goit-react-hw-05-movies/" element={<Layout />}> */}
      <Route path="goit-react-hw-05-movies/" element={<Layout />}>
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
