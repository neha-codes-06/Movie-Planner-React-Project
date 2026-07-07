function Navbar({searchTerm,setSearchTerm}){
    return (
        <nav className="Navbar">
            <h2>Movie Planner</h2>
            
             <input className="search" type="text" placeholder="Search Movies" 
             value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Favorites</a>
            <a href="#">About</a>
            </div>
        </nav>
    )
}
export default Navbar
