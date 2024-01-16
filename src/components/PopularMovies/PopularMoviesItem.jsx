import React from 'react';
import {
  StyledIMG,
  StyledLi,
  StyledLinkPopular,
  StyledRaitingSpan,
  StyledTextRaiting,
  StyledTitle3,
} from 'styled';

export const PopularMoviesItem = ({ id, name, title, popularity, image }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <StyledLi>
      <StyledLinkPopular to={`/movies/${id}`}>
        <StyledIMG
          src={
            image ? `https://image.tmdb.org/t/p/original${image}` : defaultImg
          }
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
