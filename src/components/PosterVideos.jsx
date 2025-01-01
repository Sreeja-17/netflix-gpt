import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useLocation } from "react-router-dom";


const PosterVideos = (movieId) => {
    
  console.log("Received movieId:", movieId); 
    
   
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer(movieId);
    console.log(movieId);
    if (!movieId) return <p>No Movie Selected</p>;
    return (
        <div className="w-screen">
            <iframe className="w-screen aspect-video -my-32 md:-my-24"

                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"

                }
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
};
export default PosterVideos;

