import api from "config/axios"
import { MovieInfo } from "interfaces/movies.interface";
import { useEffect, useState } from "react"



 export const  useGetMovies=()=> {
  return function(url:string){
    const [result, setMovies] = useState<MovieInfo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const endpoint = `movie/${url}`;
  
    useEffect(() => {
      
      api.get(endpoint, { params: { language: 'en-US', page: 1 } })
     
      
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.error('Error fetching now playing movies:', error);
          setError(error);
        }
        ).finally(()=>{
          setLoading(false);
        });
    }, []);
  
    return {  result, loading, error };}
  }
