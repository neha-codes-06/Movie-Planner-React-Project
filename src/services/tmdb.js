import axios from "axios";
const API_KEY=import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL="https://api.themoviedb.org/3";

export const getTrendingMovies=async()=>{
    const response=await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    return response.data.results;
}