import React from 'react';
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

      <main>{children}</main>
    </div>
  );
};
