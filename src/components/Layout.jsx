import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, HeaderLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <HeaderLink to="/goit-react-hw-05-movies" end>
          Home
        </HeaderLink>
        <HeaderLink to="movies">Movies</HeaderLink>
      </Header>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
