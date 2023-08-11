import React from "react";
import ListaRamaPrincipal from "./ListaRamaPrincipal";

const ArtcleLista = ({ title, data1 }) => {
  return (
    <>
      <div className="grid lista">
        <details>
          <summary role="button" className="secondary">
            {title}
          </summary>

          <ul>
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
