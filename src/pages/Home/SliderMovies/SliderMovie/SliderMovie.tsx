import {  Result } from 'interfaces/movies.interface'
import styles from './sliderMovie.module.scss'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
const SliderMovie = ({movie:{id,backdrop_path, title,overview}}:{movie:Result}) => {
  const imgUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`
  return (
    <div 
    className={styles.sliderMovies}
    style={{backgroundImage: `url(${imgUrl })`}}
    >
      <div className={styles.movie_info}>
        <div>
        <h2>{title}</h2>
        <p>{overview}</p>
        <Link to={`/movie/${id}`}>
        <Button type='primary'>Ver más</Button>
        </Link>
        </div>
      </div>


    </div>
  )
}

export default SliderMovie