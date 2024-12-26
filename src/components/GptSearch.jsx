import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMAGE } from "../utils/constants";
const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src= {BG_IMAGE} alt="BackGround image">
        </img>

      </div>
        <GptSearchBar/>
        
    </div>
  )
}

export default GPTSearch;