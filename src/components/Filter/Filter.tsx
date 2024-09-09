import React from 'react';
import Button from '../Button/Button';
import './Filter.scss'

interface MovieFilterProps {
  yearFilter: number | null;
  typeFilter: string | null;
  handleFilterChange: (filter: { year: number | null; type: string | null }) => void;
  setTypeFilter: (newType: string | null) => void; 
}

const MovieFilter: React.FC<MovieFilterProps> = ({ yearFilter, typeFilter, handleFilterChange, setTypeFilter }) => {

  const handleYearChange = (year: number | null) => {
    handleFilterChange({ year, type: typeFilter });
  };

  const handleTypeChange = (type: string | null) => {
    handleFilterChange({ year: yearFilter, type });
    setTypeFilter(type); // Update the type filter state
  };

  return (
    <div className="filter-container">
      <div className="filter-buttons">
        <Button
          className={yearFilter === null ? 'active' : ''}
          onClick={() => handleYearChange(null)}
        >
          Все годы
        </Button>
        <Button
          className={yearFilter === 2020 ? 'active' : ''}
          onClick={() => handleYearChange(2020)}
        >
          2020
        </Button>
        <Button
          className={yearFilter === 2019 ? 'active' : ''}
          onClick={() => handleYearChange(2019)}
        >
          2019
        </Button>
        <Button
          className={yearFilter === 2018 ? 'active' : ''}
          onClick={() => handleYearChange(2018)}
        >
          2018
        </Button>
      </div>
      <div className="filter-buttons">
        <Button
          className={typeFilter === null ? 'active' : ''}
          onClick={() => handleTypeChange(null)}
        >
          Все типы
        </Button>
        <Button
          className={typeFilter === 'movie' ? 'active' : ''}
          onClick={() => handleTypeChange('movie')}
        >
          Фильмы
        </Button>
        <Button
          className={typeFilter === 'tv' ? 'active' : ''}
          onClick={() => handleTypeChange('tv')}
        >
          Сериалы
        </Button>
      </div>
    </div>
  );
};

export default MovieFilter;