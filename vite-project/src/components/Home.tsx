import { useState, useEffect } from "react";
import { MovierCard } from "./MovierCard";
import './MovieCard.css';


const movieAPI = import.meta.env.VITE_API;
const movieKEY = import.meta.env.VITE_API_KEY;


export default function Home () {

    type MovieTypes = {
        id: number,
        title: string,
        vote_average: number,
        adult: boolean,
        poster_path: string

    }

    const [topMovies, setTopMovies] = useState <MovieTypes[]> ([]);

    const getApiMovie = async (url: string) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    }

    useEffect(() => {
        const topMoviesUrl = `${movieAPI}top_rated?${movieKEY}`;
        console.log(topMoviesUrl);
        getApiMovie(topMoviesUrl);

    }, []);

    
    return (
        <div className="container">
            <h2 className="title"> Melhores Filmes  </h2>
                <div className="movies-container">
                    {topMovies.length === 0 && 'Carregando...'}
                    {topMovies.length > 0 && (topMovies.map((item) => <MovierCard movie={item} showLink={!item.adult} /> ))}
                </div>             
        </div>
    )
}