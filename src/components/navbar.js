function Navbar() {
    return(
        <nav className="nav">
            <ul>
                <li>
                    <a  href="/">Popular</a>
                </li>
                <li>
                    <a href="/TopRated">Top Rated</a>
                </li>
                <li>
                    <a href="/Upcoming">Upcoming</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;