import { List } from "antd";
import { MovieInfo } from "interfaces/movies.interface";
import styles from './movie.module.scss'
import RenderMovie from "./RenderMovie/RenderMovie";
import Loading from "components/Loading/Loading";
import './movie.module.scss'
interface MovieListProps{
    title:string;
    movies: MovieInfo[],
    loading: boolean
}
const MovieList = ({title,movies,loading}:MovieListProps) => {
  return (
    <>{loading?<Loading/>: <List
    className={styles.movie_list}
    size="default"
    header={<h2 className={styles.title}>{title}</h2>}
    bordered
    dataSource={movies}
    renderItem={(movie)=><RenderMovie movie={movie}/>}
    ></List>}</>
   
  )
}

export default MovieList