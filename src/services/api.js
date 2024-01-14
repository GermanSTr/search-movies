import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org`;
axios.defaults.params = {
  api_key: `1ea9a27653d3c7257140465327102387`,
  language: 'en-US',
};

export const requestPopularMovies = async () => {
  const { data } = await axios.get(`/3/trending/all/day`);
  return data;
};

export const requestDetailsMovie = async movieId => {
  const { data } = await axios.get(`/3/movie/${movieId}`);
  return data;
};

export const requestCastMovie = async movieId => {
  const { data } = await axios.get(`/3/movie/${movieId}/credits`);
  return data;
};
