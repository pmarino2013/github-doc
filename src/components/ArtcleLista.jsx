import React from "react";
import ListaRamaPrincipal from "./ListaRamaPrincipal";

const ArtcleLista = ({ title, data1 }) => {
  return (
    <>
      <h5>{title}</h5>

      <div className="grid">
        <details>
          <summary role="button" class="outline">
            {title}
          </summary>
          <ul className={`animate__animated animate__fadeIn`}>
            {data1.map((data, index) => (
              <ListaRamaPrincipal key={index} data={data} />
            ))}
          </ul>
        </details>
      </div>
    </>
  );
};

export default ArtcleLista;
