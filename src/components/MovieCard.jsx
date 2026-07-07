function MovieCard(props){
    return (
        <div className="movie-card">
            <img src={props.poster}
            alt={props.title}
            />
            <h3>{props.title}</h3>
            <p>{props.year}</p>
            <p>Rating: {props.rating}</p>
            <button className="favorite-btn"onClick={props.onFavorite}>{props.isFavorite?"❤️Added":"🤍Add to Favorites"}</button>
            </div>
            
        
    )
}
export default MovieCard