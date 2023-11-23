import React, { useState, useEffect } from 'react';

const RandomStories = ({ characterList }) => {
    const [selectedCharacters, setSelectedCharacters] = useState([]);
    const [randomStory, setRandomStory] = useState(null);
  
    useEffect(() => {
      setRandomStory(null);
    }, [characterList]);
  
    const storyCharacterSelection = function(characterId) {
        if (selectedCharacters.length < 2 || selectedCharacters.includes(characterId)) {
          let updatedSelection;
          if (selectedCharacters.includes(characterId)) {
            updatedSelection = selectedCharacters.filter(function(id) {
              return id !== characterId;
            });
          } else {
            updatedSelection = [...selectedCharacters, characterId];
          }

          setSelectedCharacters(updatedSelection);
        } else {
          alert('Solo puedes seleccionar dos personajes.');
        }
      };
  

  const generateRandomStory = () => {
    const selectedCount = selectedCharacters.length;
    if (selectedCount >= 2) {
      const randomStoryCharacters = selectedCharacters.map(
        (characterId) => characterList.find((character) => character.id === characterId)
      );


      const stories = [
        {
          title: 'Odisea Estelar',
          content: `En una odisea estelar, ${randomStoryCharacters[0].name} y ${randomStoryCharacters[1].name} parten en una misión exploratoria a los confines del universo. Embarcados en la nave estelar 'Pionera', ${randomStoryCharacters[0].name}, un/a ${randomStoryCharacters[0].status} de la especie ${randomStoryCharacters[0].species}, y ${randomStoryCharacters[1].name}, un/a ${randomStoryCharacters[1].status} de la especie ${randomStoryCharacters[1].species}, enfrentarán desafíos cósmicos y descubrirán secretos olvidados. A medida que exploran nebulosas misteriosas y planetas inexplorados, una presencia alienígena antigua despierta. ¿Podrán nuestros héroes superar la prueba final y asegurar la supervivencia de la galaxia?`,
        },
        {
          title: 'Intriga Interdimensional',
          content: `En medio de una intriga interdimensional, ${randomStoryCharacters[0].name} y ${randomStoryCharacters[1].name} se ven atrapados en un conflicto entre realidades paralelas. ${randomStoryCharacters[0].name}, un/a ${randomStoryCharacters[0].status} de la especie ${randomStoryCharacters[0].species}, y ${randomStoryCharacters[1].name}, un/a ${randomStoryCharacters[1].status} de la especie ${randomStoryCharacters[1].species}, descubren la existencia de portales secretos que conectan mundos diversos. Mientras intentan cerrar estas brechas interdimensionales, se enfrentarán a versiones alternas de sí mismos y a una conspiración que amenaza con destruir la estabilidad del multiverso. ¿Podrán restaurar el equilibrio antes de que sea demasiado tarde?`,
        },
        {
          title: 'Crimen Cósmico',
          content: `Un crimen cósmico sacude la estación espacial 'Nova Prime', y ${randomStoryCharacters[0].name} y ${randomStoryCharacters[1].name} se ven envueltos en una red de engaños y traiciones. ${randomStoryCharacters[0].name}, un/a ${randomStoryCharacters[0].status} de la especie ${randomStoryCharacters[0].species}, y ${randomStoryCharacters[1].name}, un/a ${randomStoryCharacters[1].status} de la especie ${randomStoryCharacters[1].species}, son testigos de un asesinato que amenaza con desencadenar una guerra galáctica. Mientras buscan al culpable, descubren oscuros secretos detrás de la federación interplanetaria y se ven atrapados en una lucha por la justicia en las estrellas. ¿Lograrán exponer la verdad y evitar la guerra?`,
        },
        {
          title: 'Herencia Celestial',
          content: `En la antigua ciudad flotante de 'Skyhaven', ${randomStoryCharacters[0].name} y ${randomStoryCharacters[1].name} desentrañan los misterios de su herencia celestial. ${randomStoryCharacters[0].name}, descendiente de una antigua línea de ${randomStoryCharacters[0].species}, y ${randomStoryCharacters[1].name}, portador/a de un artefacto cósmico, son convocados por las fuerzas del destino. A medida que exploran templos suspendidos en las nubes y enfrentan guardianes ancestrales, descubren su conexión con dioses olvidados y el papel que desempeñarán en el renacimiento de una era perdida. ¿Podrán aceptar su destino celestial y restaurar la gloria perdida de 'Skyhaven'?`,
        },
        {
          title: 'Caza de Estrellas Fugaces',
          content: `En la caza de estrellas fugaces, ${randomStoryCharacters[0].name} y ${randomStoryCharacters[1].name} se embarcan en una expedición para presenciar un raro evento astronómico. ${randomStoryCharacters[0].name}, un/a ${randomStoryCharacters[0].status} de la especie ${randomStoryCharacters[0].species}, y ${randomStoryCharacters[1].name}, un/a ${randomStoryCharacters[1].status} de la especie ${randomStoryCharacters[1].species}, buscan el legendario cometa 'Estelaris'. A medida que siguen la estela luminosa a través del espacio, descubren que esta caza de estrellas es más que un simple evento cósmico; es una prueba de resistencia, determinación y vínculo intergaláctico. ¿Lograrán capturar la fugaz Estelaris y desentrañar su significado cósmico?`,
        },
        {
        title: 'Naufragio en el Vacío',
        content: `Después de un naufragio en el vacío del espacio, ${randomStoryCharacters[0].name} y ${randomStoryCharacters[1].name} se encuentran varados en un asteroide desolado. ${randomStoryCharacters[0].name}, un/a ${randomStoryCharacters[0].status} de la especie ${randomStoryCharacters[0].species}, y ${randomStoryCharacters[1].name}, un/a ${randomStoryCharacters[1].status} de la especie ${randomStoryCharacters[1].species}, deben colaborar para sobrevivir. Mientras buscan recursos escasos y enfrentan peligros cósmicos, descubren que el asteroide oculta secretos ancestrales y tecnología alienígena. ¿Lograrán reparar su nave y escapar antes de que la oscuridad del espacio los consuma?`,
        },
        {
        title: 'Revolución en Nexus-9',
        content: `En la distópica colonia de Nexus-9, ${randomStoryCharacters[0].name} y ${randomStoryCharacters[1].name} se convierten en líderes inesperados de una revuelta contra la opresión corporativa. ${randomStoryCharacters[0].name}, un/a ${randomStoryCharacters[0].status} de la especie ${randomStoryCharacters[0].species}, y ${randomStoryCharacters[1].name}, un/a ${randomStoryCharacters[1].status} de la especie ${randomStoryCharacters[1].species}, despiertan el deseo de libertad en la población oprimida. A medida que organizan la resistencia y enfrentan la maquinaria de la tiranía, descubren conspiraciones que van más allá de sus peores pesadillas. ¿Lograrán liberar a Nexus-9 y desentrañar las sombras que controlan su destino?`,
        },
        {
        title: 'La Última Ciudad Celestial',
        content: `En el lejano planeta Celestia Prime, ${randomStoryCharacters[0].name} y ${randomStoryCharacters[1].name} descubren la última ciudad celestial oculta entre las nubes. ${randomStoryCharacters[0].name}, un/a ${randomStoryCharacters[0].status} de la especie ${randomStoryCharacters[0].species}, y ${randomStoryCharacters[1].name}, un/a ${randomStoryCharacters[1].status} de la especie ${randomStoryCharacters[1].species}, son los elegidos para preservar el conocimiento y la cultura celestial. A medida que exploran las alturas de las ciudades flotantes, enfrentan desafíos morales y encuentran artefactos divinos. ¿Podrán proteger la última ciudad celestial de la inminente catástrofe cósmica?`,
        },
        {
        title: 'El Enigma de la Esfera Astral',
        content: `La misteriosa Esfera Astral ha aparecido en el sistema estelar Alphion, y ${randomStoryCharacters[0].name} y ${randomStoryCharacters[1].name} son llamados para descifrar su enigma. ${randomStoryCharacters[0].name}, un/a ${randomStoryCharacters[0].status} de la especie ${randomStoryCharacters[0].species}, y ${randomStoryCharacters[1].name}, un/a ${randomStoryCharacters[1].status} de la especie ${randomStoryCharacters[1].species}, poseen habilidades únicas para entender los patrones astrales. Mientras investigan la Esfera, son transportados a dimensiones desconocidas y enfrentan guardianes cósmicos. ¿Lograrán descubrir el propósito de la Esfera y evitar que su poder caiga en manos equivocadas?`,
        },
        {
        title: 'El Último Refugio',
        content: `En el planeta moribundo de Eterna, ${randomStoryCharacters[0].name} y ${randomStoryCharacters[1].name} buscan el último refugio para la supervivencia de su especie. ${randomStoryCharacters[0].name}, un/a ${randomStoryCharacters[0].status} de la especie ${randomStoryCharacters[0].species}, y ${randomStoryCharacters[1].name}, un/a ${randomStoryCharacters[1].status} de la especie ${randomStoryCharacters[1].species}, deben superar desiertos abrasadores y ruinas antiguas. A medida que descubren artefactos que podrían rejuvenecer su mundo agonizante, se enfrentan a dilemas éticos y a la resistencia de aquellos que desean mantener el statu quo. ¿Lograrán encontrar el último refugio y salvar a su civilización?`,
        },
      ];
      
      

      const randomIndex = Math.floor(Math.random() * stories.length);
      setRandomStory(stories[randomIndex]);
    } else {
      alert('Selecciona al menos 2 personajes para generar una historia.');
    }
  };

  return (
    <>
    <h1 id="history">Generador de historias</h1>
    <div className='historia'>
    <div className='izq-historia'>
      <h2>Seleccionar Personajes</h2>
      {characterList.length > 0 ? (
        <ul>
          {characterList.map((character) => (
            <li className= "li-story" key={character.id}>
              <input
                type="checkbox"
                id={`character-${character.id}`}
                checked={selectedCharacters.includes(character.id)}
                onChange={() => storyCharacterSelection(character.id)}
              />
              <label htmlFor={`character-${character.id}`}>{character.name}</label>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando lista de personajes...</p>
      )}
      </div>
      <div className='dcha-historia'>
      <h2>{randomStory ? randomStory.title : 'Historia Aleatoria'}</h2>
      {randomStory && <p className='random-story'>{randomStory.content}</p>}
      </div>
    </div>
    <button className="button-history" onClick={generateRandomStory}>Generar Historia</button>
    </>
  );
};

export default RandomStories;
