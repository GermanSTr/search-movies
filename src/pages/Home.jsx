import React, { useEffect, useState } from 'react';

import { requestPopularMovies } from 'services/api';

import { STATUSES } from 'utils/constans';

import { PopularMoviesStart } from '../components/PopularMovies/PopularMoviesStart';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

import { StyledTitle } from 'styled';

const Home = () => {
  const [popularMoviesData, setPopularMoviesData] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle);

  useEffect(() => {
    const handlepopularMovies = async () => {
      try {
        setStatus(STATUSES.pending);
        const { results } = await requestPopularMovies();
        setPopularMoviesData(results);
        setStatus(STATUSES.success);
      } catch (error) {
        setError(error.message);
        setStatus(STATUSES.error);
      }
    };
    handlepopularMovies();
  }, [setError]);

  return (
    <div>
      <StyledTitle>Trending today</StyledTitle>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.error && <ErrorMessage error={error} />}
      {status === STATUSES.success && (
        <PopularMoviesStart popularMoviesData={popularMoviesData} />
      )}
    </div>
  );
};

export default Home;
