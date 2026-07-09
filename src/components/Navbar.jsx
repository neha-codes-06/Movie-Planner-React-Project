import {Link} from "react-router-dom"
function Navbar({searchTerm,setSearchTerm}){
    return (
        <nav className="Navbar">
            <h2>Movie Planner</h2>
            
             <input className="search" type="text" placeholder="Search Movies" 
             value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <div className="nav-links">
            <Link to="/"><button className="nav-btn">Home</button></Link>
            <Link to="/favorites"><button className="nav-btn">Favorites</button></Link>
            <Link to="/about"><button className="nav-btn">About</button></Link>
            </div>
        </nav>
    )
}
export default Navbar
