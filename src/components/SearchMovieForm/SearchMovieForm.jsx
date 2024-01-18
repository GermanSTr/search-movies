import React from 'react';
import { StyledFormButton, StyledFormDiv, StyledFormInput } from 'styled';

export const SearchMovieForm = ({ handleSubmit, query }) => {
  const handleInput = e => {
    e.preventDefault();
    const search = e.currentTarget.elements.searchInput.value;
    handleSubmit(search);
  };

  return (
    <StyledFormDiv>
      <form onSubmit={handleInput}>
        <StyledFormInput
          type="text"
          name="searchInput"
          placeholder="Search movies..."
          defaultValue={query}
          required
        />
        <StyledFormButton type="submit">Search</StyledFormButton>
      </form>
    </StyledFormDiv>
  );
};
