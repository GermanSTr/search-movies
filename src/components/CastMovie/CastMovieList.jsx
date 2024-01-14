import React from 'react';
import { CastMovieItem } from './CastMovieItem';

export const CastMovieList = ({ castMovie }) => {
  return (
    <ul>
      {castMovie.map(({ original_name, profile_path, id }) => (
        <CastMovieItem key={id} name={original_name} photo={profile_path} />
      ))}
    </ul>
  );
};
