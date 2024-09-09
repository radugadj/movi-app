import React, { useEffect, useRef, useState } from 'react';
import './Modal.scss'
import Button from '../Button/Button';

interface MovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    first_air_date?: string;
    name?: string;
    overview?: string;
  };
}

const MovieModal: React.FC<MovieModalProps> = ({ isOpen, onClose, movie }) => {
   console.log(movie); 

  

  
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
      
    }
  };


  return (
    <div className="modal-background" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <p className="modal__rate">{movie.vote_average}%</p>
        <div className='modal__image'> <img className='modal__img' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} /></div>
       
         
        <h2 className='modal__title'>{movie.title}</h2>
        <p  className='modal__date'> {movie.release_date}</p>
        <p className='modal__discriprion'> {movie.overview}</p>
        <Button onClick={onClose}>Закрыть</Button>
      </div>
    </div>
  );
};

export default MovieModal;