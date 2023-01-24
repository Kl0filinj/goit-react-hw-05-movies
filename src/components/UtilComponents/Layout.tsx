import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import Button from './Button';

const Layout: React.FC = () => {
  return (
    <>
      <Flex as="header" bg="blackAlpha.900" color="#262626" py="6" px="14">
        <Button>
          <NavLink to="/goit-react-hw-05-movies">Home</NavLink>
        </Button>
        <Button margin={5}>
          <NavLink to="movies">Movies</NavLink>
        </Button>
      </Flex>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
