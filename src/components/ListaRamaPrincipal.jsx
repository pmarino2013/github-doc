import React from "react";

const ListaRamaPrincipal = ({ data }) => {
  return (
    <li>
      <b>{data.item}:</b> {data.texto}
    </li>
  );
};

export default ListaRamaPrincipal;
