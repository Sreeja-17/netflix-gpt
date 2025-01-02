import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if(!movies) return null;
    //console.log(movies)

    return (
        <div className="p-6">
            <h1 className=" text-lg md:text-3xl py-4 text-white">
                {title}
            </h1>

            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies.map(movie =>
                        <MovieCard key={movie.id}
                            posterPath={movie.poster_path}
                            movieId={movie.id} />)}

                </div>
            </div>
        </div>
    )
}

export default MovieList;