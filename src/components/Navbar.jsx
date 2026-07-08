function Navbar({searchTerm,setSearchTerm,showFavorites,setShowFavorites}){
    return (
        <nav className="Navbar">
            <h2>Movie Planner</h2>
            
             <input className="search" type="text" placeholder="Search Movies" 
             value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <div className="nav-links">
            <button className="nav-btn"onClick={()=>setShowFavorites(false)}>Home</button>
            <button className="nav-btn" onClick={()=>setShowFavorites(true)}>Favorites</button>
            <a href="#">About</a>
            </div>
        </nav>
    )
}
export default Navbar
