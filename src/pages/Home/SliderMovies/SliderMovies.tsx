import {  Result } from 'interfaces/movies.interface'
import SliderMovie from './SliderMovie/SliderMovie'
import { Carousel } from 'antd'
import Loading from 'components/Loading/Loading'
const SliderMovies = ({movies, loading}:{movies:Result[], loading:boolean}) => {
  return (
    <>
    {loading? <Loading/>:
        <Carousel autoplay={false}> 
        {movies.map((movie)=>
        
        <SliderMovie movie={movie} key={movie.id}>
    
        </SliderMovie>)}
        
        </Carousel>}

    </>
  )
}

export default SliderMovies