
import React, { useState, useEffect } from 'react';




const RickMorty = ({ data, agregarAFavoritos, favoritos }) => {
  const [loaded, setLoaded] = useState(false);
  const [favorito, setFavorito] = useState(false);
  const className = `rickmorty-card${loaded ? '' : ' hidden'}`;

  useEffect(() => {
    // Verificar si el personaje está en favoritos al cargar el componente
    const existeEnFavoritos = favoritos.some((fav) => fav.id === data.id);
    setFavorito(existeEnFavoritos);
  }, [data]); 

  const handleAgregarFavorito = () => {
    // Agregar o quitar el personaje de favoritos
    agregarAFavoritos(data);
    setFavorito(!favorito);
  };

  return (
    <article className={className}>
      <div className="container-card">
        <div className="ladoIzq">
          <h2 className="character-name">{data.name}</h2>
          <h3>Status:</h3>
          <ul className="ul-status">
            {Array.isArray(data.status) ? (
              data.status.map((status) => <li key={status}>{status}</li>)
            ) : (
              <li className="li-status" key={data.status}>
                {data.status}
              </li>
            )}
          </ul>
          <h3>Species: </h3>
          <ul className="ul-species">
            {Array.isArray(data.species) ? (
              data.species.map((species) => <li key={species}>{species}</li>)
            ) : (
              <li className="li-species" key={data.species}>
                {data.species}
              </li>
            )}
          </ul>
          <button className="fav-button" onClick={handleAgregarFavorito}>
            {favorito ? 'No favorito' : 'Favorito'}
          </button>
        </div>
        <div className="ladoDer">
          <img
            className="imagen-morty"
            src={data.image}
            alt={`imagen de ${data.name}`}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </article>
  );
};

export default RickMorty;
