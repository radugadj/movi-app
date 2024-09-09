
import Movie from "../components/Movie/Movie.tsx";

const TvShows = () => {
    return (

            <Movie itemHeading = {"Популярное"} numberOfMovies={10} moviesOn={true} showButtons={true} tvShowsOn/>
    
    )
}

export default TvShows;