import { MovieInfo } from 'interfaces/movies.interface'
import SliderMovie from './SliderMovie/SliderMovie'
import { Carousel } from 'antd'
import Loading from 'components/Loading/Loading'
const SliderMovies = ({Movies, loading}:{Movies:MovieInfo[], loading:boolean}) => {
    console.log("on component",Movies)
  return (
    <>
    {loading? <Loading/>:
        <Carousel autoplay={false}> 
        {Movies.map((movie)=><SliderMovie movie={movie} key={movie.id}>
    
        </SliderMovie>)}</Carousel>}

    </>
  )
}

export default SliderMovies