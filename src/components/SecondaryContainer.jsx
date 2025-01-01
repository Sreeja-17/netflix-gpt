import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { Link, useNavigate } from "react-router-dom";
import PosterVideos from "./posterVideos";

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies)
    //const navigate=useNavigate();
    if (!movies) return null;




    console.log(movies)
    return (
        <>
            <div>

                <div className=" bg-black">
                    <div className=" mt-16 md:-mt-52 pl-4 md:pl-12 relative z-20">
                        movies.nowPlayingMovies &&  ( <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />)
                        movies.popularMovies &&  (<MovieList title={"Top Rated"} movies={movies.popularMovies} />)
                        movies.upComingMovies &&  (<MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />)
                        movies.topRatedMovies &&  (<MovieList title={"Funny Movies"} movies={movies.topRatedMovies} />)
                        movies.nowPlayingMovies &&  (<MovieList title={"Horror"} movies={movies.nowPlayingMovies} />)
                    </div>

                </div>
            </div>


        </>
    );

};
export default SecondaryContainer;
