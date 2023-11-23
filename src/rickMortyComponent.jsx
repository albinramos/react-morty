
import React, { useState, useEffect } from 'react';
import { agregarAFavoritos, obtenerFavoritos } from './favoriteComponent';

const RickMorty = ({ data }) => {
  const [loaded, setLoaded] = useState(false);
  const [favorito, setFavorito] = useState(false);
  const className = `rickmorty-card${loaded ? '' : ' hidden'}`;

  useEffect(() => {
    // Verificar si el personaje está en favoritos al cargar el componente
    const favoritos = obtenerFavoritos();
    const existeEnFavoritos = favoritos.some((fav) => fav.id === data.id);
    setFavorito(existeEnFavoritos);
  }, [data.id]);

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
        </div>
        <div className="ladoDer">
          <img
            className="imagen-morty"
            src={data.image}
            alt={`imagen de ${data.name}`}
            onLoad={() => setLoaded(true)}
          />
          <button onClick={handleAgregarFavorito}>
            {favorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          </button>
        </div>
      </div>
    </article>
  );
};

export default RickMorty;
