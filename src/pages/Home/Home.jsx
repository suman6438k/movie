import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { IoStar } from "react-icons/io5";
import "../Home.css"
import { Link } from 'react-router-dom';


const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f4c5b135fcf672995d0e63c3839d279a'
                );
                setPopularMovies(response.data.results);
                console.log(response.data)
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData();
    }, [])


    return (
        <>
            <div className='poster'>
                <Carousel showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => {
                            return (
                                <>
                                <Link style = {{textDecoration:"none", color:"white"}} to={`/movie/${movie.id}`}>
                            <div className='posterImage'>
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
                            </div>
                            <div className='posterImage__overlay'>
                                <div className='posterImage__title'>{movie ? movie.original_title: ""}</div>
                                <div className='posterImage__runtime'>
                                    {movie ? movie.release_date: ""}
                                    <span className='posterImage__rating'>
                                        {movie ? movie.vote_average: ""}
                                        <IoStar />
                                    </span>
                                </div>
                            </div>
                                <div className='posterImage__description'>{movie ? movie.overview: ""}</div>
                                </Link>
                            </>
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    )
}

export default Home