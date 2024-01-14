import React from 'react';

export const CastMovieItem = ({ name, photo }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <li>
      <img
        src={photo ? `https://image.tmdb.org/t/p/original${photo}` : defaultImg}
        width={150}
        alt=""
      />
      <p>{name}</p>
    </li>
  );
};
