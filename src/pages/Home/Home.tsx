import { useGetMovies } from "Hooks/useGetMovies"
import SliderMovies from "./SliderMovies/SliderMovies";
import { Col, Row } from "antd";
import MovieList from "components/MovieList/MovieList";
import Footer from "components/Footer/Footer";

const Home = () => {
   const useMovies = useGetMovies();
  const  movies= useMovies('now_playing');
  
  const moviesResult = movies.movies?.results 
  const popularMovies = useMovies('popular');
  const topMovies = useMovies('top_rated')
  const popularResults = popularMovies.movies?.results
  const TopRatedResult = topMovies.movies?.results
  
  return (
    <div>
     
      <SliderMovies movies={moviesResult!} loading={movies.loading}/>
      <Row>
        <Col span={12}>
          <MovieList title='Popular movies' movies={popularResults!} loading={popularMovies.loading}/>
        </Col>
        <Col span={12}>
        <MovieList title='Top rated' movies={TopRatedResult!} loading={popularMovies.loading}/>

        </Col>
      </Row>
      <Footer></Footer>
    </div>
  )
}

export default Home