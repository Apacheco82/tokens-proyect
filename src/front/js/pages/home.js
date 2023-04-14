import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	//const { store, actions } = useContext(Context);

	return (

		<form>
				<input type="email" name="email" className="form-control"  placeholder="Enter email"></input>
				<input type="text" name= "user_name"className="form-control"  placeholder="Enter user name"></input>
				<input type="password" name="password" className="form-control"  placeholder="Password"></input>
				<input type="submit" className="btn btn-primary">Submit</input>
		</form>

	)
};
