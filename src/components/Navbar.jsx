function Navbar(){
    return (
        <nav className="Navbar">
            <h2>Movie Planner</h2>
             <input className="search" type="text" placeholder="Search Movies"/>
            <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Favorites</a>
            <a href="#">About</a>
            </div>
        </nav>
    )
}
export default Navbar
