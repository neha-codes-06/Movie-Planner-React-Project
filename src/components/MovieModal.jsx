import {useState,useEffect}from "react"
const API_KEY=import.meta.env.VITE_TMDB_API_KEY;
function MovieModal(props){
    const [trailer, setTrailer]=useState(null)
    useEffect(()=>{
        const fetchTrailer=async()=>{
            try{
                const response=await fetch(`https://api.themoviedb.org/3/movie/${props.movie.id}/videos?api_key=${API_KEY}`)
                const data=await response.json()
                const trailerData=data.results.find((video)=>video.type==="Trailer"&&video.site==="YouTube")
                console.log(trailerData)
                if(trailerData){
                    setTrailer(`https://www.youtube.com/watch?v=${trailerData.key}`)
                }
            }
            catch(error){
                console.log(error)
            }
        }
        fetchTrailer()
    },[props.movie])
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
                {trailer && (

                    <button className="trailer-btn" onClick={() => window.open(trailer,"_blank")}>
                        Watch Trailer
                    </button>
                )}
                <br></br>
                <button className="close-btn" onClick={props.onClose}>
                    Close
                </button>
            </div>
        </div>
        </div>
    )
}


export default MovieModal