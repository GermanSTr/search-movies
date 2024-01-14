import { DetailsMovieBase } from 'components/DetailsMovie/DetailsMovieBase';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Loader } from 'components/Loader/Loader';

import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import { requestDetailsMovie } from 'services/api';
import { STATUSES } from 'utils/constans';

import Cast from './Cast';
import Reviews from './Reviews';

import { StyledLinkDetails } from 'styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [detailsMovie, setDetailsMovie] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle);

  useEffect(() => {
    if (!movieId) return;

    const handlepopularMovies = async () => {
      try {
        setStatus(STATUSES.pending);
        const movieData = await requestDetailsMovie(movieId);
        setDetailsMovie(movieData);
        setStatus(STATUSES.success);
      } catch (error) {
        setError(error.message);
        setStatus(STATUSES.error);
      }
    };
    handlepopularMovies();
  }, [setError, movieId]);

  return (
    <div>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.error && <ErrorMessage error={error} />}
      {status === STATUSES.success && (
        <DetailsMovieBase detailsMovie={detailsMovie} />
      )}

      <h3>Adiditional information</h3>
      <StyledLinkDetails to="cast">Cast</StyledLinkDetails>
      <StyledLinkDetails to="reviews">Reviews</StyledLinkDetails>

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetails;
