import React from 'react';
import { PopularMoviesItem } from './PopularMoviesItem';
import { StyledUl } from 'styled';

export const PopularMoviesStart = ({ popularMoviesData }) => {
  return (
    <StyledUl>
      {popularMoviesData.map(({ id, name, title, popularity, poster_path }) => (
        <PopularMoviesItem
          key={id}
          id={id}
          name={name}
          title={title}
          popularity={popularity}
          image={poster_path}
        />
      ))}
    </StyledUl>
  );
};
