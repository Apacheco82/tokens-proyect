import React, {Component} from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <p>
	<Link to="/Demo" className="link-styling">Términos y condiciones</Link>

    </p>
  </footer>
);
