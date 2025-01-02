import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { Link, useNavigate } from "react-router-dom";
import PlayVideo from "./PlayVideo";

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies)
    
    if (!movies) return null;

    return (
        <>
            <div>
                <div className=" bg-black">
                    <div className=" mt-16 md:-mt-52 pl-4 md:pl-12 relative z-20">
                        ( <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />)
                        (<MovieList title={"Top Rated"} movies={movies.popularMovies} />)
                        (<MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />)
                        (<MovieList title={"Funny Movies"} movies={movies.topRatedMovies} />)
                        (<MovieList title={"Horror"} movies={movies.nowPlayingMovies} />)
                    </div>

                </div>
            </div>


        </>
    );

};
export default SecondaryContainer;
