import lang from "../utils/languageConstants"
const GptSearchBar = () => {
  return (
    <div className="pt-[15%] flex justify-center -mt-24">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-2 m-4 col-span-9"
          placeholder={lang.hindi.gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg">
          {lang.hindi.search}
        </button>

      </form>
    </div>
  )
}

export default GptSearchBar;