import React, { useState } from "react";
import ListaRamaPrincipal from "./ListaRamaPrincipal";

const ArtcleLista = ({ title, data1 }) => {
  const [openBtn1, setOpenBtn1] = useState(false);
  return (
    <>
      <h5>{title}</h5>

      <div className="grid">
        <div></div>
        <div></div>
        <div></div>

        <div>
          <button onClick={() => setOpenBtn1(!openBtn1)}>
            <span>👀</span>
          </button>
        </div>
      </div>
      {openBtn1 && (
        <ul>
          {data1.map((data, index) => (
            <ListaRamaPrincipal key={index} data={data} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ArtcleLista;
