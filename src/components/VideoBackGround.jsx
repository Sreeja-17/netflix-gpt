import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackGround = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer(movieId);
    console.log(trailerVideo)

    //fetch trailer video
    return (
        <div className="w-screen">
            <iframe className="w-screen aspect-video -my-24"

                src={"https://www.youtube.com/embed/" + trailerVideo?.key +"?&autoplay=1&mute=1"

                }
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
};
export default VideoBackGround;

