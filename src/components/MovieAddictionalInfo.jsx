import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Wrap, WrapItem, Heading } from '@chakra-ui/react';
import Button from './Button';
// import { HeaderLink } from './Layout.styled';

const MovieAddictionalInfo = ({ location, movieId }) => {
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

MovieAddictionalInfo.propTypes = {
  movieId: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default MovieAddictionalInfo;
