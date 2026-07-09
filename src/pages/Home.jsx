import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";

function Home({
  movies,
  favorites,
  addToFavorites,
  removeFromFavorites,
  setSelectedMovie,
}) {
  return (
    <>
      {/* <Hero /> */}

      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.release_date}
            rating={movie.vote_average}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            onFavorite={() => addToFavorites(movie)}
            isFavorite={favorites.some((fav) => fav.id === movie.id)}
            onRemove={() => removeFromFavorites(movie.id)}
            onMovieClick={() => setSelectedMovie(movie)}
          />
        ))}
      </div>
    </>
  );
}

export default Home;