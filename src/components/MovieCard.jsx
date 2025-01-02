
import { Link, useParams } from "react-router-dom"
import { CDN_LINK } from "../utils/constants"

const MovieCard = ({ posterPath, movieId }) => {
  
  if (!posterPath) return null;


  return (
    <Link to={`/browse/video/${movieId}`}>
      <div className="w-48 pr-4">
        <img alt="Movie Card" src={CDN_LINK + posterPath}  ></img>
      </div>
    </Link>
  )
}

export default MovieCard

