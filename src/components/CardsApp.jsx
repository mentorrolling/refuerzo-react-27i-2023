import React from "react";

const CardsApp = (props) => {
  return (
    <div className="container-cards">
      <div className="card">
        <div>
          <img
            src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
            alt=""
          />
        </div>
        <div className="container-body">
          <div className="text-card">
            <span>titulo</span>
          </div>
          <div className="btn-card">
            <a className="button" href="#" target="_blank">
              More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsApp;
