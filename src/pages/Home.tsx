import Movie from "../components/Movie/Movie.tsx";
const Home = () => {
    return (
        
            <Movie  itemHeading = {"Популярные фильмы"} numberOfMovies={12} moviesOn={true} showButtons={true}  tvShowsOn={false}/>
    )
}

export default Home;