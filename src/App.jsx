import {useState,useEffect}from "react"
import "./Styles/App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MovieCard from "./components/MovieCard"
import { getTrendingMovies } from "./services/tmdb"

function App(){
  const [movies,setMovies]=useState([])
  const [searchTerm,setSearchTerm]=useState("")
  const [favorites,setFavorites]=useState(()=>{
    const savedFavorites=localStorage.getItem("favorites")
    return savedFavorites?JSON.parse(savedFavorites):[]
  })
  const [showFavorites,setShowFavorites]=useState(false)
  const [selectedMovie,setSelectedMovie]=useState(null)

  const filteredMovies=movies.filter((movie)=>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  function addToFavorites(movie){
    const alreadyFavorite=favorites.some((fav)=>fav.id===movie.id);
    if(!alreadyFavorite){
    setFavorites([...favorites,movie])
    }
    
  }

  function removeFromFavorites(movieId){
    const updatedFavorites=favorites.filter((movie)=>movie.id !==movieId);
    setFavorites(updatedFavorites);

  }

  useEffect(()=>{
    const fetchMovies=async()=>{
      const data=await getTrendingMovies()
      setMovies(data)
    }
    fetchMovies()
  },[])
 
  useEffect(()=>{
    console.log("favorites updated",favorites)
    localStorage.setItem("favorites",JSON.stringify(favorites))
  },[favorites])
  const moviesToShow=showFavorites?favorites:filteredMovies
  return (
   <>

    <Navbar 
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
    showFavorites={showFavorites}
    setShowFavorites={setShowFavorites}
    />
    <Hero />
    <div className="movie-container">
    {moviesToShow.map((movie)=>(

      <MovieCard key={movie.id} 
      title={movie.title} 
      year={movie.release_date}
       rating={movie.vote_average}
       poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
       onFavorite={() => addToFavorites(movie)}
       isFavorite={favorites.some((fav)=>fav.id===movie.id)}
       onRemove={()=>removeFromFavorites(movie.id)}
       showFavorites={showFavorites}
       onMovieClick={()=>setSelectedMovie(movie)}
       />

    ))}

  </div>

   </>
  )
}

export default App