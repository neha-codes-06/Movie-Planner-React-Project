import {useState,useEffect}from "react"
import "./Styles/App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MovieCard from "./components/MovieCard"
import { getTrendingMovies } from "./services/tmdb"

function App(){
  const [movies,setMovies]=useState([])
  const [searchTerm,setSearchTerm]=useState("")
  useEffect(()=>{
    const fetchMovies=async()=>{
      const data=await getTrendingMovies()
      setMovies(data)
    }
    fetchMovies()

  },[])
  
  return (
   <>

    <Navbar />
    <Hero />
    <div className="movie-container">
    {movies.map((movie)=>(

      <MovieCard key={movie.id} title={movie.title} year={movie.release_date} rating={movie.vote_average}poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />

    ))}

  </div>

   </>
  )
}

export default App