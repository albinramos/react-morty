import { useState, useEffect } from 'react';
import RickMorty from './rickMortyComponent';
import RandomStories from './randomStories';
/* import './App.css' */

function App() {
  const [rickMortyList, setRickMortyList] = useState([]);
  const [error, setError] = useState("");
  const [rickMortyData, setRickMortyData] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("https://rickandmortyapi.com/api/character");
  const [nextUrl, setNextUrl] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  // Función para agregar o quitar personajes de favoritos
  const agregarAFavoritos = (character) => {
    const favs = JSON.parse(localStorage.getItem('favoritos')) || [];
    const existeEnFavoritos = favs.some((fav) => fav.id === character.id);

    if (existeEnFavoritos) {
      const nuevosFavoritos = favs.filter((fav) => fav.id !== character.id);
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
      setFavoritos(nuevosFavoritos);
    } else {
      const nuevoFavorito = { id: character.id, nombre: character.name, imagen: character.image };
      localStorage.setItem('favoritos', JSON.stringify([...favs, nuevoFavorito]));
      setFavoritos([...favs, nuevoFavorito]);
    }
  };

  // Función para obtener la lista de favoritos
  const obtenerFavoritos = () => {
    return JSON.parse(localStorage.getItem('favoritos')) || [];
  };

  useEffect(() => {
    setRickMortyData([]);
    getRickMorty();
  }, [currentUrl]);

  useEffect(() => {
    if (rickMortyList.length > 0) {
      getRickMortyData();
    }
  }, [rickMortyList]);

  useEffect(() => {
    const favs = obtenerFavoritos();
    setFavoritos(favs);
  }, [favoritos]);

  const getRickMortyData = async () => {
    try {
      const data = await Promise.all(
        rickMortyList.map(async (rickmorty) => {
          const getRickMortyData = await fetch(rickmorty.url);
          const result = await getRickMortyData.json();
          return result;
        })
      );
      setRickMortyData(data);
    } catch (e) {
      setError("Algo ha salido malamente..");
    }
  }

  const getRickMorty = async () => {
    try {
      const data = await fetch(currentUrl);
      const results = await data.json();
      console.log(results);
      setNextUrl(results.info.next);
      setPreviousUrl(results.info.prev);
      setRickMortyList(results.results);
    } catch (e) {
      setError("Algo salió mal..");
    }
  };

  const goToNext = () => {
    setCurrentUrl(nextUrl);
  };

  const goToPrevious = () => {
    setCurrentUrl(previousUrl);
  };



  return (
    <>
      <img className="logo-home" src="/public/rick-and-morty-31013.png" alt="Logo de Rick and Morty"></img>
      <p className="error">{error}</p>
      {rickMortyData.length !== 0 && previousUrl && <button onClick={goToPrevious}>Previous</button>}
      {rickMortyData.length !== 0 && nextUrl && <button onClick={goToNext}>Next</button>}
      {rickMortyData.length === 0 &&
        <img className='img-loading' src="/public/rickmorty.png" alt="Cargando"></img>
      }
      {rickMortyData.length === 0 &&
        <h2 className='h2-loading'>LOADING...</h2>
      }
      <section className='rickmorty-container'>
        {rickMortyData.map((rickmorty) => (
          <RickMorty key={rickmorty.id} data={rickmorty} agregarAFavoritos={agregarAFavoritos} />
        ))}
      </section>
      <RandomStories characterList={rickMortyData} />
      <section className='favoritos-container'>
        <h2>Favoritos</h2>
        {favoritos.map((favorito) => (
          <div key={favorito.id}>
            <p>Nombre: {favorito.nombre}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default App;
