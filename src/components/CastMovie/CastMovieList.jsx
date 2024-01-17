import React from 'react';
import { CastMovieItem } from './CastMovieItem';
import { StyledUl } from 'styled';

export const CastMovieList = ({ castMovie }) => {
  return (
    <StyledUl>
      {castMovie.map(({ original_name, profile_path, id }) => (
        <CastMovieItem key={id} name={original_name} photo={profile_path} />
      ))}
    </StyledUl>
  );
};
