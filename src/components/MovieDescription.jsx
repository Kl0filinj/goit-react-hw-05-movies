import PropTypes from 'prop-types';
// import {
//   FilmTitle,
//   FilmDescriptionWrapper,
//   FilmGener,
// } from 'pages/MovieDetails.styled';
import MoviePoster from './MoviePoster';

// import {
//   DescriptionCategory,
//   DescriptionWrapper,
// } from './MovieDescription.styled';
import {
  Wrap,
  WrapItem,
  Heading,
  CircularProgress,
  CircularProgressLabel,
  Text,
} from '@chakra-ui/react';

import MovieAddictionalInfo from './MovieAddictionalInfo';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MovieDescription = ({ filmDetails, location, movieId }) => {
  const { poster_path, original_title, vote_average, overview, genres } =
    filmDetails;
  const voteAveragePercent = Math.floor(Number(vote_average) * 10);

  return (
    <>
      <Wrap
        color="white"
        spacing="16"
        bgColor="gray.700"
        p="8"
        borderRadius="sm"
      >
        <WrapItem>
          <MoviePoster
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'https://via.placeholder.com/300x450'
            }
            width="300"
            height="450"
          />
        </WrapItem>
        <WrapItem
          maxW="600px"
          justifyContent="space-around"
          flexDirection="column"
        >
          <div>
            <Heading as="h1" fontSize="4xl">
              {original_title}
            </Heading>
          </div>
          <div>
            <Heading as="h2" fontSize="2xl" mb="3">
              User Rate
            </Heading>
            {/* <p>{` ${voteAveragePercent}%`}</p> */}
            <CircularProgress
              value={voteAveragePercent}
              size="80px"
              color="green.400"
            >
              <CircularProgressLabel>{` ${voteAveragePercent}%`}</CircularProgressLabel>
            </CircularProgress>
          </div>
          <div>
            <Heading as="h2" fontSize="2xl" mb="3">
              Overview
            </Heading>
            <p>{overview}</p>
          </div>
          <div>
            <Heading as="h2" fontSize="2xl" mb="3">
              Geners
            </Heading>
            <Wrap>
              {genres.map(({ id, name }) => (
                <WrapItem
                  key={id}
                  sx={{
                    '&:not(:first-of-type)': {
                      marginLeft: '10px',
                    },
                  }}
                >
                  <Text
                    as="span"
                    p="1"
                    borderColor="white"
                    borderWidth="2px"
                    borderRadius="3"
                  >
                    {name}
                  </Text>
                </WrapItem>
              ))}
            </Wrap>
          </div>
          <div>
            <MovieAddictionalInfo location={location} movieId={movieId} />
          </div>
        </WrapItem>
      </Wrap>
      <div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

MovieDescription.propTypes = {
  filmDetails: PropTypes.object.isRequired,
};

export default MovieDescription;
