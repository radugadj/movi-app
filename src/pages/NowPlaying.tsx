
import Movie from "../components/Movie/Movie.tsx";



    const NowPlaying = () => {
    return (
    
            <Movie  itemHeading = {"Сейчас смотрят"} numberOfMovies={10} moviesOn={false} showButtons={true} tvShowsOn={true}/>
        
    )
}

export default NowPlaying;