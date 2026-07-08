function Navbar({searchTerm,setSearchTerm,showFavorites,setShowFavorites,showAbout,setShowAbout}){
    return (
        <nav className="Navbar">
            <h2>Movie Planner</h2>
            
             <input className="search" type="text" placeholder="Search Movies" 
             value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <div className="nav-links">
            <button className="nav-btn"onClick={()=>{setShowFavorites(false);setShowAbout(false)}}>Home</button>
            <button className="nav-btn" onClick={()=>{setShowFavorites(true);setShowAbout(false)}}>Favorites</button>
            <button className="nav-btn" onClick={()=>{setShowAbout(true);setShowFavorites(false)}}>About</button>
            </div>
        </nav>
    )
}
export default Navbar
