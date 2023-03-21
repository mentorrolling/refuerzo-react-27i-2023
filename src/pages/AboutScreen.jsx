import React from "react";
import "../App.css";
import usuarios from "../data/users.json";

const AboutScreen = () => {
  return (
    <>
      <h1>About</h1>
      <div className="App container">
        {usuarios.map((usuario) => (
          <div className="box" key={usuario.id}>
            <div className="img-container">
              <img src={usuario.avatar} alt={usuario.first_name} />
            </div>
            <div>
              <p>
                {usuario.first_name} {usuario.last_name}
              </p>
              <p>{usuario.email}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutScreen;
