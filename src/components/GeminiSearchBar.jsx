import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants"
import { useRef } from "react";

import model from "../utils/geminiAI";
import { API_OPTIONS } from "../utils/constants";
import { addGeminiMovieResult } from "../utils/geminiSlice";


const GeminiSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector(store => store.config.lang)
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie +
      "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    )
    const json = await data.json();
    return json.results;
  }

  const handleGeminiSearchClick = async () => {

    const geminiQuery = "Act as a movie Recommendation system and suggest some movies for query"
      + searchText.current.value +
      ".only give me names of 5 movies,comma seperated like the example given ahead.Example Result: Gadar,Don,Gangubhai,sholay,Golmaal";

    const result = await model.generateContent([geminiQuery]);
    const geminiResult = result.response.text();
    console.log(result.response.text());
    const geminiMoviesArray = geminiResult.trim().split(",");
    console.log(geminiMoviesArray)

    if (!geminiMoviesArray)
      return (<div>
        "Loading"
      </div>)

    const promiseArray = geminiMoviesArray.map((movie) => searchMovieTMDB(movie));
    const tmbdResults = await Promise.all(promiseArray)
    console.log(tmbdResults)
    dispatch(addGeminiMovieResult({ movieNames: geminiMoviesArray, movieResults: tmbdResults }))


  };


  return (
    <div className=" pt-[30%] md:pt-[15%] flex justify-center -mt-24">
      <form className=" w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-2 m-4 col-span-9"
          placeholder={lang[langKey].geminiSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg"
          onClick={handleGeminiSearchClick}>
          {lang[langKey].search}
        </button>

      </form>
    </div>
  )
}


export default GeminiSearchBar;