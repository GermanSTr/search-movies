import React, { useState } from 'react';
import { StyledFormButton, StyledFormDiv, StyledFormInput } from 'styled';

export const SearchMovieForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    e.preventDefault();
    const search = e.currentTarget.elements.searchInput.value;
    setQuery(search);
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
