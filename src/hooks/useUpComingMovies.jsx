import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpComingMovies = () => {
    const upComingMovies = useSelector((store) => store.movies.upComingMovies);
    
    const dispatch = useDispatch();
    const getUpComingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming",
            API_OPTIONS);
        const json = await data.json();
        console.log(json)
        dispatch(addUpcomingMovies(json.results));
        
    };


    useEffect(() => {
        !upComingMovies && getUpComingMovies();

    }, []);

}
export default useUpComingMovies;