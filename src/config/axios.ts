import axios  from "axios";

// Crea una instancia personalizada de Axios
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDVlNzEzNGJmNGMyNjQ1NWZlYjE5NzFjYzQwMjFmMiIsInN1YiI6IjY1ZGRlNWY2MjRiMzMzMDE4NWI3OTRiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JjhyyViPeP2pBTdLOTKN_OU3E4ZHziX-f36yDBAY2EE'
  }
});

export default api;
