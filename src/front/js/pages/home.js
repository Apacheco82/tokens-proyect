import React, {useContext} from "react";
import {Context} from "../store/appContext";
import unnamed from "../../img/unnamed.png";
import "../../styles/home.css";
import { Footer } from '../component/footer.js'; // importación de nombre
import {Link} from "react-router-dom";


export const Home = () => {
  const {store, actions} = useContext(Context);

  return (
<div className="container d-flex align-items-center mt-5">
  <div className="text-center mx-auto">

    <p>
	<Link to="/Demo">
      <img src={unnamed} className="canteros" />
	
	  </Link>
	  <p className="p-1">pincha sobre el logo para hacer login</p>
    </p>
    <h1>Club oficial de los Canteros de Springfield</h1>

    <Footer />
  </div>
</div>

  );
};
