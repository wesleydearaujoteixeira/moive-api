import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
  } from "react-icons/bs";


import './Movie.css';
import './responsive.css';

const movieAPI = import.meta.env.VITE_API;
const movieKEY = import.meta.env.VITE_API_KEY;
const imageAPI = import.meta.env.VITE_IMG;

export function Movie () {
        
    type MovieTypes = {
        id: number,
        title: string,
        poster_path: string,
        vote_average: number,
        budget: number,
        revenue: number,
        runtime: number,
        genres: [
            {id: number, name: string}
        ]
        overview: string
    }

    const {id} = useParams();
    const [movie, setMovie] = useState <MovieTypes | null> (null);

    const getMovie = async (url: string) => {

        const res = await fetch(url);
        const data = await res.json();

        console.log(data);

        setMovie(data);

    }

    useEffect(() => {

        const movie = `${movieAPI}${id}?${movieKEY}`;
       getMovie(movie); 

    }, []);


    const FormatCurrency = (money: number | undefined) => {
        if ( typeof money == 'number' ){
            return  money.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
        }

        return;
    }




    return (
        <div className="content">
            <h1>{movie && movie.title}</h1>
            <div className="content-image">
                <img src={imageAPI + movie?.poster_path} id="image" alt="" />

                    <div className="box-fixed">
                        <div className="box">
                            <ul> {movie?.genres.map((item) => {
                                return <li> {item.name} </li>
                            })}
                        
                            </ul>
                            <div className="infoContent">
                                <p> {movie?.overview} </p>
                            </div>
                            <div className="box-information">
                                <span> <h2> Orçamento: </h2> </span>
                                <div className="box-details">
                                    <h3> <BsWallet2/></h3>
                                    <h2> {FormatCurrency(movie?.budget)} </h2>
                                </div>
                                <span> <h2> Receitas: </h2> </span>
                                <div className="box-details">
                                    <h3> <BsGraphUp/></h3>
                                    <h2> {FormatCurrency(movie?.revenue)} </h2>
                                </div>
                                <span> <h2> Tempo de exibição: </h2> </span>
                                <div className="box-details">
                                    <h3>   <BsHourglassSplit/> </h3>
                                    <h2> {movie?.runtime} minutos </h2>
                                </div>
                                <span> <h2> Avaliação: </h2> </span>
                                <div className="box-details">
                                    <h3> <BsFillFileEarmarkTextFill/> </h3>
                                    <h2> {movie?.vote_average.toFixed(1)}</h2>
                                </div>
                    </div>
                        </div>
                       

                    </div>
            </div>

        </div>
    )
}