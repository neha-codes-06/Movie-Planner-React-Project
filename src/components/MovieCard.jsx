function MovieCard(props){
    return (
        <div className="movie-card" onClick={props.onMovieClick}>
            <img src={props.poster}
            alt={props.title}
            />
            <h3>{props.title}</h3>
            <p>{props.year}</p>
            <p>Rating: {props.rating}</p>
            {props.showFavorites?(<button className="favorite-btn"onClick={(e)=>{e.stopPropagation();props.onRemove()}}>Remove</button>):(
            <button className="favorite-btn"onClick={(e)=>{e.stopPropagation(); props.onFavorite()}}>{props.isFavorite?"❤️Added":"🤍Add to Favorites"}</button>)}
            </div>
            
        
    )
}
export default MovieCard