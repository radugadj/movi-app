import { Movie } from "../components/Movie/Movie";

const updateMovieList = (showItems: Movie[], results: Movie[], numberOfMovies: number) => {
  const updatedList = [...showItems];
  results.forEach((movie) => {
    if (!updatedList.find((item) => item.id === movie.id)) {
      updatedList.push(movie);
    }
  });
  return updatedList.slice(0, numberOfMovies);
};

export default updateMovieList;