import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import {API_OPTIONS} from "../utils/constants"


const useMovieTrailer = (movieId) => {
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const dispatch = useDispatch();
    
    if(!movieId) return null;


    const getMovieVideos = async () => {
        const data = await fetch
            ("https://api.themoviedb.org/3/movie/"
                + movieId
                +"/videos?language=en-US",
                API_OPTIONS
            );
            
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
        
    };
    useEffect(() => {
        !trailerVideo && getMovieVideos();
    }, []);
}

export default useMovieTrailer;