import React, {useContext} from "react";
import storeContext from "../context/storeContext";
import "./navBar.css"; 
import { Link } from "react-router-dom";


const NavBar = () => {
  // read the cart from the context store
  const cart = useContext(storeContext).cart;

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary bg-gradient">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/#">Organika</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catalog">Catalog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">Admin</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Me</Link>
        </li>
      </ul>
      <form className="d-flex">
        <Link to="/cart" className="btn btn-outline-light">
        <span className="badge bg-primary">{cart.length}</span>
        View Cart
        </Link>
      </form>
    </div>
  </div>
</nav>
    )

}
export default NavBar;




/**
 * Create an Admin component
 * Render Admin below catalog on app.js
 * 
 * Admin should display Link H1 (Manage your products)
 */