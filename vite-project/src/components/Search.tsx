import { useEffect, useState } from "react";
import {  useSearchParams } from "react-router-dom";
import { MovierCard } from "./MovierCard";
import './MovieCard.css';
import './responsive.css';

export function Search () {

    const searchURL = import.meta.env.VITE_SEARCH;
    const apiKey = import.meta.env.VITE_API_KEY;


    type MovieTypes = {
        id: number,
        title: string,
        vote_average: number,
        adult: boolean,
        poster_path: string
    }


    const [topMovies, setMovies] = useState <MovieTypes[]> ([]);

    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    const fetchApiSearch = async (url: string) => {

        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);

    }

    useEffect(() => {

        const topMoviesUrl = `${searchURL}?${apiKey}&query=${query}`;
        fetchApiSearch(topMoviesUrl);

    }, [query]);


    return (
        <div className="container">
        <h2 className="title"> 
            Resultados para Filmes: <span className="query-text"> {query}  </span>  
        </h2>
            <div className="movies-container">
                {topMovies.length === 0 && 'Carregando...'}
                {topMovies.length > 0 && (topMovies.map((item) => <MovierCard movie={item} showLink={!item.adult} /> ))}
            </div>             
    </div>
    )
}