import "./Movie.scss";
import {useEffect, useState} from "react";
import * as React from "react";
import { CircularProgress } from "@mui/material";
import MovieCard from "../MovieCard/MovieCard.tsx";
import Button from "../Button/Button.tsx";
import MovieFilter from "../Filter/Filter.tsx";
import MovieModal from "../Modal/Modal.tsx";
import fetchMovies from "../../api/fetchMovies.ts";
import Search from "../Search/Search.tsx";

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    first_air_date?: string;
    name?: string;
    overview?: string;
}

interface DataProps {
    numberOfMovies: number;
    showButtons: boolean;
    tvShowsOn: boolean;
    moviesOn: boolean;
    itemHeading: string;
}


const Movie: React.FC<DataProps> = ({
                                        numberOfMovies,
                                        showButtons,
                                        itemHeading,
                                        
                                    }) => {

    const [showItems, setShowItems] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [totalPages, setTotalPages] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(null);
    const [yearFilter, setYearFilter] = useState<number | null>(null);
    const [typeFilter, setTypeFilter] = useState<string | null>(null);

    const handleMovieClick = (movie: Movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
        localStorage.setItem('selectedMovie', JSON.stringify(movie));
    };

    useEffect(() => {
    const storedIsOpen = localStorage.getItem('selectedMovie');

    if (storedIsOpen) {
      setSelectedMovie(JSON.parse(storedIsOpen));
      setIsModalOpen(true);
    }
  }, []);




useEffect(() => {
  const fetchMoviesData = async () => {
  setLoading(true);
  const data = await fetchMovies(searchQuery, currentPage, yearFilter, typeFilter);
  console.log(data); 
  if (data) {
    setShowItems([...data.results.slice(0, numberOfMovies)]);
    setTotalPages(data.total_pages);
  }
  setLoading(false);
};
  fetchMoviesData();
}, [currentPage, searchQuery, yearFilter, typeFilter]);

   const handleShowMore = async () => {
  setCurrentPage((prevPage) => prevPage + 1);
  const nextPageData = await fetchMovies(searchQuery, currentPage, yearFilter, typeFilter);
  if (nextPageData) {
    const nextItems = nextPageData.results.slice(0, numberOfMovies);
    setShowItems(prevItems.concat(nextItems));
  }
};

    const handleFilterChange = (filter: { year: number | null; type: string | null }) => {
        console.log('Filter changed:', filter);
    setYearFilter(filter.year);
    setTypeFilter(filter.type);
  };

    

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
    localStorage.setItem('selectedMovie', '');
  };

    return (
        <div className="main-container">
                <Search />
                <MovieFilter setTypeFilter={setTypeFilter} yearFilter={yearFilter} typeFilter={typeFilter} handleFilterChange={handleFilterChange} />
            <div className="movie__heading">
                <h2 className="title__heading">{itemHeading}</h2>
            </div>
            <div className="movie__card">
                {loading && currentPage === 1 ? (
                    <CircularProgress/>
                ) : (
                    showItems.length > 0 ? (
                        showItems.map((item) => (
                             <MovieCard key={item.id} item={item} handleMovieClick={handleMovieClick} />
                        ))
                    ) : (
                        <p>По вашему запросу ничего не найдено.</p>
                    )
                )}
            </div>
            {showButtons && currentPage < totalPages && (
                <div className="movie__buttons">
                    <Button className="movie__btn" onClick={handleShowMore} >
                        Показать еще
                    </Button>
                </div>
            )}
            {isModalOpen && selectedMovie && (
                <div className="modal__container">
                <MovieModal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  movie={selectedMovie}
                />
                </div>
              )}
        </div>
    );
};

export default Movie;