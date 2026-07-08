import {userState,userEffect}from "react"
function MovieModal(props){


    

    return(
        <div className="modal">
            <div className="modal-content">
                
                
                <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title} />
                <div className="movie-details">
                <h2>{props.movie.title}</h2>
                <p><strong>Release Date:</strong> {props.movie.release_date}</p>
                <p><strong>Rating:</strong> {props.movie.vote_average}</p>
                <p><strong>Overview:</strong> {props.movie.overview}</p>
                <p><strong>Vote Count:</strong> {props.movie.vote_count}</p>
                <p><strong>Popularity:</strong> {props.movie.popularity}</p>
                <p></p>
                <button className="close-btn"onClick={props.onClose}>Close</button>

</div>
            </div>
        </div>
    )
}
export default MovieModal