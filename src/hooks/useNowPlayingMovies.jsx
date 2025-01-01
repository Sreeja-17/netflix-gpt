import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";



const useNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    

    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing",
            API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
        //console.log(json);
    };


    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();

    }, []);

}
export default useNowPlayingMovies;
