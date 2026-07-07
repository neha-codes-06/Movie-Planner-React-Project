import {useState,useEffect}from "react"
import "./Styles/App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MovieCard from "./components/MovieCard"
import { getTrendingMovies } from "./services/tmdb"

function App(){
  const [movies,setMovies]=useState([])
  const [searchTerm,setSearchTerm]=useState("")
  const [favorites,setFavorites]=useState([])

  const filteredMovies=movies.filter((movie)=>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  function addToFavorites(movie){
    setFavorites([...favorites,movie])
  }
  useEffect(()=>{
    const fetchMovies=async()=>{
      const data=await getTrendingMovies()
      setMovies(data)
    }
    fetchMovies()

  },[])
  
  return (
   <>

    <Navbar 
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
    />
    <Hero />
    <div className="movie-container">
    {filteredMovies.map((movie)=>(

      <MovieCard key={movie.id} 
      title={movie.title} 
      year={movie.release_date}
       rating={movie.vote_average}
       poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
       onFavorite={() => addToFavorites(movie)}
       />

    ))}

  </div>

   </>
  )
}

export default App