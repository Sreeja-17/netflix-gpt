import GeminiSearchBar from "./GeminiSearchBar";
import GeminiMovieSuggestion from "./GeminiMovieSuggestion";
import { BG_IMAGE } from "../utils/constants";
const GeminiSearch = () => {
  return (
    <><div className="fixed -z-10  ">
      <img className="h-screen object-cover space-y-8 md:w-full md:h-full md:object-cover" src={BG_IMAGE} alt="BackGround image">
      </img>

    </div>
    <div className="pt-[40%] md:p-0">

        <GeminiSearchBar />
        <GeminiMovieSuggestion />

      </div></>
  )
}

export default GeminiSearch;