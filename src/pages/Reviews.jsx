import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Loader } from 'components/Loader/Loader';
import { ReviewsMovieList } from 'components/ReviewsMovie/ReviewsMovieList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestReviewsMovie } from 'services/api';
import { STATUSES } from 'utils/constans';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsMovie, setReviewsMovie] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUSES.idle);

  useEffect(() => {
    if (!movieId) return;

    const getReviewsMovie = async () => {
      try {
        setStatus(STATUSES.pending);
        const { results } = await requestReviewsMovie(movieId);
        setReviewsMovie(results);
        setStatus(STATUSES.success);
      } catch (error) {
        setError(error.message);
        setStatus(STATUSES.error);
      }
    };
    getReviewsMovie();
  }, [setError, movieId]);

  return (
    <div>
      {status === STATUSES.pending && <Loader />}
      {status === STATUSES.error && <ErrorMessage error={error} />}
      {status === STATUSES.success && (
        <>
          {reviewsMovie.length > 0 ? (
            <ReviewsMovieList reviewsMovie={reviewsMovie} />
          ) : (
            <p>We don`t have any reviews for this movie</p>
          )}
        </>
      )}
    </div>
  );
};

export default Reviews;
