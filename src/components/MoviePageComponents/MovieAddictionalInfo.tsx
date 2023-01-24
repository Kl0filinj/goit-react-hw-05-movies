// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Wrap, WrapItem, Heading } from '@chakra-ui/react';
import Button from '../UtilComponents/Button';
import { ILocation } from 'interfaces/reactApiInterfaces';
import React from 'react';

interface MovieAddictionalInfoProps {
  location: ILocation;
  movieId: string | undefined;
}

const MovieAddictionalInfo: React.FC<MovieAddictionalInfoProps> = ({
  location,
  movieId,
}) => {
  return (
    <>
      <Heading as="h1" fontSize="2xl" mb="3">
        Additonal Information
      </Heading>
      <Wrap>
        <WrapItem>
          <Button>
            <NavLink
              to={'cast'}
              state={{ ...location.state, movieId: movieId }}
            >
              Cast
            </NavLink>
          </Button>
        </WrapItem>
        <WrapItem>
          <Button margin={5}>
            <NavLink
              to={'reviews'}
              state={{ ...location.state, movieId: movieId }}
            >
              Reviews
            </NavLink>
          </Button>
        </WrapItem>
      </Wrap>
    </>
  );
};

export default MovieAddictionalInfo;
