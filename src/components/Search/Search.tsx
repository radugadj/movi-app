import { useState, useEffect } from 'react';
import searchMovies from '../../api/searchMovies';
import './Serch.scss';
import MovieCard from '../MovieCard/MovieCard';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query: string) => {
  if (query.trim() === '') {
    setSearchResults([]); // очищаем список результатов, если запрос пуст
  } else {
    try {
      const results = await searchMovies(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  }
};

 const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const query = event.target.value;
  setSearchQuery(query); // обновляем состояние searchQuery

  const timeoutId = setTimeout(() => {
    handleSearch(query);
  }, 500); // wait for 500ms before sending the request

  return () => {
    clearTimeout(timeoutId);
  };
};

  return (
  <div className='search__bar'>
    <input
      className='input__search'
      type="text"
      value={searchQuery}
      onChange={handleInputChange}
      placeholder="Поиск фильмов и сериалов"
    />
    {searchResults.length > 0 &&
      <ul className='movie__list'>
        {searchResults.map((movie) => (
          
            <MovieCard item={movie} />
          
        ))}
      </ul>
    }
  </div>
);
};

export default Search;