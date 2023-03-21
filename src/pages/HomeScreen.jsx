import React from "react";

import "../App.css";
const HomeScreen = () => {
  return (
    <div className="App ">
      <div>
        <h1>News Geek</h1>
        <button>Back</button>
        <button>Next</button>
      </div>
      <div>
        <div className="container-cards"></div>
      </div>
    </div>
  );
};

export default HomeScreen;
