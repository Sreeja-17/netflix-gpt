import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (movies === null) return <div>Loading...</div>;
    if (movies.length === 0) {
        return <div>No movies available</div>;
    }

    const mainMovie = movies[1];
    const { original_title, overview, id } = mainMovie;

    return (
        <><div className=" pt-[30%] bg-black md:pt-0" >
            <VideoTitle title={original_title} overview={overview} movieId={id} />
            <VideoBackGround movieId={id} />
        </div></>
    )

}
export default MainContainer;