import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./Moviedetail.css"
import axios from 'axios';


const MovieDetail = () => {

    const [currentMovieDetail, setMovieDetail] = useState()
    const {id} = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f4c5b135fcf672995d0e63c3839d279a`
                );
                setMovieDetail(response.data)
            } catch (err) {
                console.log(err.message);
            }
        };
        getData();
    }, [])

  return (
    <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MovieDetail