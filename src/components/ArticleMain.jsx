import React from "react";
import ArtcleLista from "./ArtcleLista";

const ArticleMain = ({ articulo }) => {
  return (
    <article>
      <h3>{articulo.titulo}</h3>
      <div className="grid">
        <div className="img-article">
          <img src={articulo.img} alt="ramas" />
        </div>
        <div>
          <p>{articulo.texto}</p>
        </div>
      </div>
      <ArtcleLista title={articulo.titulo2} data1={articulo.items} />
    </article>
  );
};

export default ArticleMain;
