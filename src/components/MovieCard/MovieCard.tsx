
import React from 'react';
import getFormattedDate from "../../utils/getFormattedDate";
import defaultImage from "../../assets/default-image.jpg";


interface MovieCardProps {
  item: {
    id: number;
    poster_path: string;
    title: string;
    name: string;
    vote_average: number;
    release_date: string;
    first_air_date: string;
  };
  handleMovieClick?: (item: any) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ item, handleMovieClick }) => {
  console.log(defaultImage, 'error')
  return (
    <div className="movie" key={item.id} onClick={ () => !!handleMovieClick && handleMovieClick(item)} >
      <div className="movieImage">
        <img
          src={ item.poster_path ? `https://image.tmdb.org/t/p/w200/${item.poster_path}` : defaultImage}
          alt={item.title}
        />
        <p className="movie__rate">{item.vote_average}%</p>
      </div>
      <div className="movie__info">
        <h4 className="movie__title">{item.title || item.name}</h4>
        <p className="movie__date">{getFormattedDate(item.release_date || item.first_air_date)}</p>
      </div>
    </div>
  );
};

export default MovieCard;