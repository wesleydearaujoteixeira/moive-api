import { useState } from "react"
import { useParams } from "react-router-dom";

export function Movie () {
        
    type MovieTypes = {
        id: number,
        title: string,
        poster_path: string,
        vote_average: number,
    }





    const [movie, setMovie] = useState <MovieTypes[]> ([]);




    return (
        <div>
            <h1> Movie com o id </h1>
        </div>
    )
}