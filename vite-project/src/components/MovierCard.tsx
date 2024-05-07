import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import './responsive.css';


const imageUrl: string = import.meta.env.VITE_IMG;

type MovieTypes = {
    id: number,
    title: string,
    poster_path: string,
    vote_average: number,
}


type Props = {
    movie: MovieTypes,
    showLink: boolean
}



export const MovierCard = ({movie, showLink = true}: Props) => {

    return (
        <div className="movie-card">
                <img src={imageUrl+ movie.poster_path} alt="" />
                <h2> {movie.title} </h2>
                <p>
                    <FaStar/> {movie.vote_average}
                </p>
                {showLink == true ? <Link to={`/movie/${movie.id}`}> Detalhes </Link> : null}
        </div>
    )
}