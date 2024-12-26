import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming",
            API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
        console.log(json);
    };


    useEffect(() => {
        !popularMovies && getPopularMovies();

    }, []);

}
export default usePopularMovies;