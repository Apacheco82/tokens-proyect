import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<form>
				<div class="form-group">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" name="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"></input>
						<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>
				<div class="form-group">
					<label for="exampleInputEmail1">User name</label>
					<input type="text" name= "user_name"class="form-control"  aria-describedby="emailHelp" placeholder="Enter user name"></input>
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
				</div>
			
				<button type="submit" class="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};
