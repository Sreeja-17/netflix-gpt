import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";


const PlayVideo = () => {
    const { movieId } = useParams();
    
    const [movieKey, setMovieKey] = useState("");

    const getMovieVideos = async () => {
        try{

        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,
            API_OPTIONS
        );

        const json = await data.json();
        
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setMovieKey(trailer.key);
    }catch{
        console.log("Error fetching movie videos:");

    };
};

    useEffect(() => {
        getMovieVideos();
    }, []);


    if (!movieId) return <p>No Movie Selected</p>;
    return (
        <div className="w-screen">
            <iframe className="w-screen aspect-video -my-32 md:-my-24"

                src={"https://www.youtube.com/embed/" + movieKey+ "?&autoplay=1&mute=1"

                }
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
};
export default PlayVideo;

