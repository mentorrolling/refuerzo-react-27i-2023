import React, { useState, useEffect } from "react";
import { getNews } from "../helpers/fetchApi";
import CardsApp from "../components/CardsApp";
import "../App.css";
const HomeScreen = () => {
  const [noticias, setNoticias] = useState(null);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    traerNoticias(pagina);
  }, [pagina]);

  const traerNoticias = async (page) => {
    const { articles } = await getNews(page);
    console.log(articles);
    setNoticias(articles);
  };

  const nextNews = () => {
    if (pagina <= 3) {
      setPagina(pagina + 1);
    }
  };

  const backNews = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  return (
    <div className="App ">
      <div>
        <h1>News Geek</h1>
        <button onClick={backNews} disabled={pagina == 1 && true}>
          Back
        </button>
        <button onClick={nextNews} disabled={pagina == 4 && true}>
          Next
        </button>
      </div>
      <div>
        {noticias ? (
          <CardsApp noticias={noticias} />
        ) : (
          // <div className="container-cards">
          //   {noticias.map((noticia, index) => (
          //     <div className="card" key={index}>
          //       <div>
          //         <img
          //           src={
          //             noticia.urlToImage
          //               ? noticia.urlToImage
          //               : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
          //           }
          //           alt={noticia.title}
          //         />
          //       </div>
          //       <div className="container-body">
          //         <div className="text-card">
          //           <span>{noticia.title}</span>
          //         </div>
          //         <div className="btn-card">
          //           <a className="button" href={noticia.url} target="_blank">
          //             More...
          //           </a>
          //         </div>
          //       </div>
          //     </div>
          //   ))}
          // </div>
          <h3>Cargando...</h3>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
