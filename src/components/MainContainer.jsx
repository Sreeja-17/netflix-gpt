import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer=()=>{
    const movies= useSelector((store)=>store.movies?.nowPlayingMovies);
    
    //console.log(movies)

    if(movies=== null) return;
    const mainMovie= movies[1];
    //console.log(mainMovie)
    
    const {original_title, overview ,id} = mainMovie;

    return(
        <><div className=" pt-[30%] bg-black md:pt-0" >
            <VideoTitle title={original_title} overview={overview} />
        
                <VideoBackGround movieId={id} />
            </div></>
    )

}
export default MainContainer;