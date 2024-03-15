import api from "config/axios"
import { Movie } from "interfaces/movie.interface";
import { Movies } from "interfaces/movies.interface";
import { useEffect, useState } from "react"



 export const  useGetMovies=()=> {
  return function(url:string){
    const [movies, setMovies] = useState<Movies >();
    const [movie, setMovie] = useState<Movie>()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const endpoint = `movie/${url}`;
  
    useEffect(() => {
      
      api.get(endpoint, { params: { language: 'en-US', page: 1 } })
     
      
        .then(response => {
          
          if (response.data.results) {
            
            
            setMovies(response.data);
          }
          else{
            console.log('single movie',response.data);
            setMovie(response.data)
          }

        })
        .catch(error => {
          console.error('Error fetching now playing movies:', error);
          setError(error);
        }
        ).finally(()=>{
          setLoading(false);
        });
    }, []);
    
    return {  movies,movie, loading, error };}
  }
