import { useState, useEffect } from 'react'
import RickMorty from './rickMortyComponent';
import './App.css'

function App() {

  const [rickMortyList, setRickMortyList] = useState([]);
  const [error, setError] = useState("");
  const [rickMortyData, setRickMortyData] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("https://rickandmortyapi.com/api/character");
  const [nextUrl, setNextUrl] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(null);

  useEffect(() => {
    setRickMortyData([]);
    getRickMorty();
  },[currentUrl])

  useEffect(() => {
    if(rickMortyList.length > 0){
      getRickMortyData();
    }
  }, [rickMortyList])
  
  const getRickMortyData = async() => {
    try{
      const data = await Promise.all(
        rickMortyList.map(async (rickmorty) => {
          const getRickMortyData = await fetch(rickmorty.url);
          const result = await getRickMortyData.json();
          return result;
        })
      );
      //console.log(data);
      setRickMortyData(data);
    }
    catch(e){
      setError("Algo ha salido malamente..");
    }
  }

  const getRickMorty = async () => {
    //funcion para recoger dato API
  try{
      //throw new Error("algo");
      const data = await fetch(currentUrl);
      const results = await data.json();
      console.log(results);
      setNextUrl(results.info.next);
      setPreviousUrl(results.info.prev);
      setRickMortyList(results.results);
  } 
  catch (e){
    setError("Algo salio mal..");
    console.log(e);
  }
}

const goToNext = () => {
  setCurrentUrl(nextUrl);

}
const goToPrevious = () =>{
  setCurrentUrl(previousUrl)
}

  return (
    <>
      <h1>RICK & MORTY</h1>
      <p className="error">{error}</p>
      {rickMortyData.length !== 0 && previousUrl && <button onClick={goToPrevious}>Previous</button>}
      {rickMortyData.length !== 0 && nextUrl && <button onClick={goToNext}>Next</button>}
      {rickMortyData.length === 0 && 
      <p>Loading data...</p>
      }
      <section className='rickmorty-container'>
        {rickMortyData.map((rickmorty) => (
          <RickMorty key={rickmorty.id} data ={rickmorty} />
        ))}
      </section>
    </>
  )
}

export default App
