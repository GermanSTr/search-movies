import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/PopularMovies/MoviesList';
import { SearchMovieForm } from 'components/SearchMovieForm/SearchMovieForm';
import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { requestMoviesByQuery } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [moviesQuery, setMoviesQuery] = useState(null);
  const query = searchParams.get('film') || '';

  useEffect(() => {
    if (query === null) return;
    const fetchMovieByQuery = async () => {
      try {
        setIsLoading(true);
        const { results } = await requestMoviesByQuery(query);
        setMoviesQuery(results);
      } catch (error) {
        Notiflix.Notify.warning(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieByQuery();
  }, [query]);

  const handleSubmit = search => {
    setSearchParams({
      film: search,
    });
  };
  return (
    <div>
      <SearchMovieForm query={moviesQuery} handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {moviesQuery !== null && moviesQuery.length > 0 && (
        <MoviesList MoviesData={moviesQuery} />
      )}
    </div>
  );
};

export default Movies;
