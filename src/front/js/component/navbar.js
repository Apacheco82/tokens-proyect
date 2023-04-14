import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
<nav className="navbar navbar-expand-xl navbar-dark bg-dark">
  <div className="container">
    <Link to="/" className="link-styling">
      <h1 className="navbar-brand mb-0 h1 text-warning">Únete a nuestro club</h1>
    </Link>
    <div className="ml-auto">
      <Link to="/Formulario">
        <button className="btn btn-primary">Check the Context in action</button>
      </Link>
    </div>
  </div>
</nav>



	);
};
