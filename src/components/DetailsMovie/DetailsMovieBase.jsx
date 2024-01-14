import React from 'react';
import { StyledDetailsDiv } from 'styled';

export const DetailsMovieBase = ({ detailsMovie }) => {
  const {
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
  } = detailsMovie;
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <StyledDetailsDiv>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            : defaultImg
        }
        width={250}
        alt={original_title}
      />
      <div>
        <h2>
          {original_title}({parseInt(release_date.split('-')[0], 10)})
        </h2>

        <p>User Score: {vote_average.toFixed(1)}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(({ name }) => name).join(', ')}</p>
      </div>
    </StyledDetailsDiv>
  );
};
