import { CDN_LINK } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4">
        <img alt="Movie Card" src={CDN_LINK + posterPath}  ></img>
    </div>
  )
}

export default MovieCard