import { CastMovieList } from 'components/CastMovie/CastMovieList';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestCastMovie } from 'services/api';
import { STATUSES } from 'utils/constans';

const Cast = () => {
  const { movieId } = useParams();
  const [castMovie, setCastMovie] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle);

  useEffect(() => {
    if (!movieId) return;

    const handlepopularMovies = async () => {
      try {
        setStatus(STATUSES.pending);
        const { cast } = await requestCastMovie(movieId);
        setCastMovie(cast);
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
      {status === STATUSES.success && <CastMovieList castMovie={castMovie} />}
    </div>
  );
};

export default Cast;
