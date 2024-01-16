import React from 'react';

export const ReviewsMovieList = ({ reviewsMovie }) => {
  return (
    <ul>
      {reviewsMovie.map(({ id, author, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
