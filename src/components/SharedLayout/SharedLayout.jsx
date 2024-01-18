import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, StyledNavLink } from 'styled';

export const SharedLayout = ({ children }) => {
  return (
    <div>
      <Header>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies" end>
          Movies
        </StyledNavLink>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <main>{children}</main>
    </div>
  );
};
