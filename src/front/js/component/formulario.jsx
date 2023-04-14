import React, { useState } from "react";

export const Formulario = () => {

  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nombre de usuario: ${user_name}`);
    console.log(`Contraseña: ${password}`);
    console.log(`Email: ${email}`);
  };

  return (
       <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="user_name">Nombre de usuario:</label>
        <input
          type="text"
          className="form-control"
          id="user_name"
          name="user_name"
          value={user_name}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
}

