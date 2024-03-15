import { useParams } from "react-router-dom";
import styles from "./movie.module.scss";
import { useGetMovies } from "Hooks/useGetMovies";
import Loading from "components/Loading/Loading";
import { Button, Col, Row } from "antd";
import { MOVIES_IMGS_URL } from "config/moviesBaseLink";
const Movie = () => {
  const { id = "792307" } = useParams(); //'Poor things'id by default
  const getMovies = useGetMovies();
  getMovies(id);
  const { movie, loading } = getMovies(id);

  const imgUrl = `${MOVIES_IMGS_URL}/${movie?.backdrop_path}`;
  const PosterUrl = `${MOVIES_IMGS_URL}/${movie?.poster_path}`
  const yearFormat = (dateString:string) => dateString.split('-')[0]
  return (
    <div>
      {loading && <Loading />}
      <div
        className={styles.movie}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Row className={styles.row}>
         
            {movie && (
              <>
                 <Col span={8} offset={3} className={styles.poster} >
                  <div style={{backgroundImage: `url(${PosterUrl})`}}>
                    </div>
                  </Col>
                <Col span={10} className={styles.info}>
               <div className={styles.header}>
               <h1>{movie.title}   <span>{yearFormat(movie.release_date)}</span></h1>
          <Button type="primary" className={styles.linkBtn}>Ver Trailer</Button>
               </div>
              <div className={styles.info_content}>
                <h3>General</h3>
                <p>{movie.overview}</p>
                <h3>Genders</h3>
                <ul>
                  {movie.genres.map(genre =><li key={genre.id}>{genre.name}</li>)}
                </ul>
              </div>
        
                </Col>
              </>
            )}
         
        </Row>
      </div>
    </div>
  );
};

export default Movie;
