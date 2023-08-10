import React from "react";

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
    </article>
  );
};

export default ArticleMain;
