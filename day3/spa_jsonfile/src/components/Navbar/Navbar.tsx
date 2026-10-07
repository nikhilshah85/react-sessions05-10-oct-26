import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Product Management
      </div>

      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Search
        </NavLink>

        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Add Product
        </NavLink>

        <NavLink
          to="/update"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Update Product
        </NavLink>

        <NavLink
          to="/delete"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Delete Product
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;