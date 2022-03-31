import React, { useState }  from 'react' ;
import { movidata } from '../Constant/Data';
import Add from "./Add";
import MovieCard from './MovieCard';

const MovieList = ({input}) => {
  const[movies , setMovies] = useState(movidata);
  const addMovie=(newMovie)=>{
    setMovies([...movies,newMovie])
}

  return (
    <div>
      <Add addMovie={addMovie}/>
      <div style={{display:"flex" , flexWrap:"wrap" ,justifyContent:"space-around" ,margin:"20px" ,padding:"10px" }}>
        
      {movies.filter(el=>el.Title.toLowerCase().includes(input.toLowerCase()) || el.Rate>= input).map((el) => (
        
    <MovieCard Move={el}/>
    
    ))}
      
      
      
      </div>
    </div>
  )
}

export default MovieList