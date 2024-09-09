import axios from 'axios';
import { discoverEndpoint, searchEndpoint, discoverTvShowsEndpoint } from '../modules/movies.modules.ts';

interface FetchMoviesParams {
  query: string;
  page: number;
  year?: number;
  typeFilter: string | null;
}

const fetchMovies = async (
  searchQuery: string,
  currentPage: number,
  yearFilter: number | null,
  typeFilter: string | null,
  isTvShow: boolean,
) => {
  const endpoints = isTvShow ? discoverTvShowsEndpoint : searchQuery ? searchEndpoint : discoverEndpoint;
  const params: FetchMoviesParams = {
    query: searchQuery,
    page: currentPage,
  };

  if (yearFilter !== null) {
    params.year = yearFilter;
  }

  if (typeFilter !== null) {
    params.typeFilter = typeFilter;
  }

  const response = await axios.get(endpoints, {
    params,
  });

  const { results, total_pages } = response.data;
  return { results, total_pages };
};

export default fetchMovies;

