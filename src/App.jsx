import {useState,useEffect}from "react"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import About from "./pages/About"
import "./Styles/App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MovieCard from "./components/MovieCard"
import { getTrendingMovies } from "./services/tmdb"
import MovieModal from "./components/MovieModal"


function App(){
  const [movies,setMovies]=useState([])
  const [searchTerm,setSearchTerm]=useState("")
  const [favorites,setFavorites]=useState(()=>{
    const savedFavorites=localStorage.getItem("favorites")
    return savedFavorites?JSON.parse(savedFavorites):[]
  })

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

  return (
   <>

    <Navbar 
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
    
    />
    <Hero />
   <Routes>
  <Route
    path="/"
    element={
      <Home
        movies={filteredMovies}
        favorites={favorites}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        setSelectedMovie={setSelectedMovie}
      />
    }
  />
  <Route
    path="/favorites"
    element={
      <Favorites
        movies={favorites}
        removeFromFavorites={removeFromFavorites}
        setSelectedMovie={setSelectedMovie}
      />
    }
  />
  <Route
    path="/about"
    element={<About />}
  />
</Routes>

  {selectedMovie&&
  <MovieModal movie={selectedMovie} 
  onClose={()=>setSelectedMovie(null)}/>
}



   </>
  )
}

export default App