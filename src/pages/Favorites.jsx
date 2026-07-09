import MovieCard from "../components/MovieCard";

function Favorites({
  movies,
  removeFromFavorites,
  setSelectedMovie,
}) {
  return (
    <div className="movie-container">
      {movies.length === 0 ? (
        <h2>No favorite movies yet.</h2>
      ) : (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.release_date}
            rating={movie.vote_average}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            isFavorite={true}
            onRemove={() => removeFromFavorites(movie.id)}
            onMovieClick={() => setSelectedMovie(movie)}
          />
        ))
      )}
    </div>
  );
}

export default Favorites;