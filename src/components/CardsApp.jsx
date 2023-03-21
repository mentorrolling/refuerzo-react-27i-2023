import React from "react";

const CardsApp = (props) => {
  const { noticias } = props;
  return (
    <div className="container-cards">
      {noticias.map((noticia, index) => (
        <div className="card" key={index}>
          <div>
            <img
              src={
                noticia.urlToImage
                  ? noticia.urlToImage
                  : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
              }
              alt={noticia.title}
            />
          </div>
          <div className="container-body">
            <div className="text-card">
              <span>{noticia.title}</span>
            </div>
            <div className="btn-card">
              <a className="button" href={noticia.url} target="_blank">
                More...
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsApp;
