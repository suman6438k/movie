import React from 'react';
import { useEffect,useState } from 'react';
import "./MovieList.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from "../Card/Card.jsx"

const MovieList = () => {

  const [movieList , setMovieList] = useState([])
  const {type} = useParams()

  // useEffect(() => {
  //   getData()
  // },[])

  // useEffect(() => {
  //   getData()
  // },[type])


  useEffect(() => {
    const getData = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${type  ? type : "popular"}?api_key=f4c5b135fcf672995d0e63c3839d279a`
            );
            setMovieList(response.data.results);
        } catch (err) {
            console.log(err.message);
        }
    };
    getData();
}, [type])


  return (
    <>
    <div className='movie__list'>
      <h2 className='list__title'>{(type ? type: "popular").toUpperCase()}</h2>
      <div className='list__cards'>
        {
          movieList.map(movie => (
            <Card movie={movie}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default MovieList