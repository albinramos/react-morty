

const agregarAFavoritos = (personaje) => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const existeEnFavoritos = favoritos.some((fav) => fav.id === personaje.id);
  
    if (existeEnFavoritos) {
      const nuevosFavoritos = favoritos.filter((fav) => fav.id !== personaje.id);
      localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    } else {
      const nuevoFavorito = { id: personaje.id, nombre: personaje.name, imagen: personaje.image };
      localStorage.setItem('favoritos', JSON.stringify([...favoritos, nuevoFavorito]));
    }
  };
  
const obtenerFavoritos = () => {
    return JSON.parse(localStorage.getItem('favoritos')) || [];
  };
  
  export {
    agregarAFavoritos,
    obtenerFavoritos
  }