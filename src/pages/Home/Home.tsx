import { useGetMovies } from "Hooks/useGetMovies"
import SliderMovies from "./SliderMovies/SliderMovies";
import { Col, Row } from "antd";
import MovieList from "components/MovieList/MovieList";
import Footer from "components/Footer/Footer";

const Home = () => {
   const useMovies = useGetMovies();
  const  movies= useMovies('now_playing');
  const popularMovies = useMovies('popular');
  const topMovies = useMovies('top_rated')
  console.log(movies);
  
  return (
    <div>
     
      <SliderMovies Movies={movies.result} loading={movies.loading}/>
      <Row>
        <Col span={12}>
          <MovieList title='Popular movies' movies={popularMovies.result} loading={popularMovies.loading}/>
        </Col>
        <Col span={12}>
        <MovieList title='Top rated' movies={topMovies.result} loading={popularMovies.loading}/>

        </Col>
      </Row>
      <Footer></Footer>
    </div>
  )
}

export default Home