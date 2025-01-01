
import { Link } from "react-router-dom"
import { CDN_LINK } from "../utils/constants"

const MovieCard = ({posterPath,movieId}) => {

  return (
     <Link
    to={{
      pathname: "/video",
      state: { movieId }, // Pass movieId via state
      
    }}
    >
    <div className="w-48 pr-4">
        <img alt="Movie Card" src={CDN_LINK + posterPath}  ></img>
    </div>
    </Link>
  )
}

export default MovieCard

