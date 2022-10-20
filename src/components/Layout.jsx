import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, HeaderLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <HeaderLink to="/" end>
          Home
        </HeaderLink>
        <HeaderLink to="/movies">Movies</HeaderLink>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
