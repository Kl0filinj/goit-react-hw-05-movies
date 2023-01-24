import MoviePoster from '../UtilComponents/MoviePoster';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFilmCast } from 'services/api';
import { Wrap, WrapItem, Center, Text, Box, Heading } from '@chakra-ui/react';

const Cast: React.FC = props => {
  const [castList, setcastList] = useState([]);
  const location = useLocation();
  const movieId = location.state.movieId;

  useEffect(() => {
    async function getFilmCastInfo() {
      const cast = await getFilmCast(movieId);
      setcastList(cast.cast);
    }
    getFilmCastInfo();
  }, [movieId]);

  return (
    <Box as="section" mt="7">
      <Box bgColor="gray.700" p="8" borderRadius="sm">
        <Heading as="h2" fontSize="2xl" mb="3">
          Cast
        </Heading>
        <Wrap spacing="4" justify="center" pt="1">
          {castList.map(({ id, profile_path, name, character }) => (
            <WrapItem key={id} flexDirection="column">
              <MoviePoster
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://via.placeholder.com/200x300'
                }
                // @ts-ignore
                height="300px"
                width="200px"
              />
              <Center
                bgColor="black"
                w="100%"
                maxW="200px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                flexGrow="1"
                borderBottomRadius="base"
              >
                <Text as="span" textAlign="center">
                  {name}
                </Text>
                <hr style={{ width: '70%' }} />
                <Text as="span">{character}</Text>
              </Center>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
};

export default Cast;
