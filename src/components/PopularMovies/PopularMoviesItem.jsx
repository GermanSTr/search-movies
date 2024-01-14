import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledIMG,
  StyledLi,
  StyledLinkPopular,
  StyledRaitingSpan,
  StyledTextRaiting,
  StyledTitle3,
} from 'styled';

export const PopularMoviesItem = ({ id, name, title, popularity, image }) => {
  return (
    <StyledLi>
      <StyledLinkPopular to={`/movies/${id}`}>
        <StyledIMG
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt={title}
        />
        <StyledTitle3>{name ?? title}</StyledTitle3>
        <StyledTextRaiting>
          rating:<StyledRaitingSpan>{popularity.toFixed(1)}</StyledRaitingSpan>
        </StyledTextRaiting>
      </StyledLinkPopular>
    </StyledLi>
  );
};
