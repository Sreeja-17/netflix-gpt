import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
//import GptSearchBar from "./GptSearchBar";
import GeminiSearch from "./GeminiSearch";

const Browse = () => {
    const showGeminiSearch = useSelector(store => store.gemini.showGeminiSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    return (
        <div >
            <Header />
            {showGeminiSearch ? (
                <GeminiSearch />
            ) : (
                <><MainContainer />
                    <SecondaryContainer /></>

            )}
        </div>
    );
};
export default Browse;