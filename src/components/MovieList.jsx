import MovieCard from "./MovieCard";
//import PosterVideos from "./posterVideos";


const MovieList = ({ title,movies }) => {


    if (!movies) return null

    return (
        <div className="p-6">
            <h1 className=" text-lg md:text-3xl py-4 text-white">{title}</h1>

            <div className="flex overflow-x-scroll">
                
                        <div className="flex">
                            {movies.map(movies => <MovieCard key={movies.id} posterPath={movies.poster_path} movieId={movies.Id}/>)}

                        </div> 
            </div>
        </div>
    )
}

export default MovieList;