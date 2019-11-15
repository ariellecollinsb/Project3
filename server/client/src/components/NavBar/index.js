import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Meal Prepper</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

                <li className="nav-link">
                    <NavLink className="nav-link" activeClassName="active"
                        isActive={() => window.location.pathname === "/" ||
                            window.location.pathname === "/about"}
                        to="/">Home</NavLink>
                </li>

                <li className="nav-link">
                    <NavLink className="nav-link" activeClassName="active"
                        to="/discover">Discover</NavLink>
                </li>

                <li className="nav-link">
                    <NavLink className="nav-link" activeClassName="active"
                        to="/search">Search</NavLink>
                </li>

                <li className="nav-link">
                    <NavLink className="nav-link" activeClassName="active"
                        to="/search">Profile</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)
export default NavBar;


// import React from "react";

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar-brand" href="/">
//          Recipes
//       </a>
//     </nav>
//   );
// }

// export default Nav;