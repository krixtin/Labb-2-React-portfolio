import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="nav-container">
        <ul className="nav-menu">
          <li className="nav-option">
            <NavLink to="/" className={({ isActive }) => isActive ? "current-page" : ""}>Hem</NavLink>
          </li>
          <li className="nav-option">
            <NavLink to="/om-mig" className={({ isActive }) => isActive ? "current-page" : ""}>Om&nbsp;mig</NavLink>
          </li>
          <li className="nav-option">
            <NavLink to="/cv" className={({ isActive }) => isActive ? "current-page" : ""}>CV</NavLink>
          </li>
          <li className="nav-option">
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "current-page" : ""}>Portfolio</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;