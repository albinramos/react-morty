import { useState } from "react";

const RickMorty = ({data}) => {
    const [loaded,setLoaded] = useState(false);
    const className = "rickmorty-card";

    return (
        <article className= {className + (loaded ? "" : " hidden")}>
            <h2>{data.name}</h2>
            <img src={data.image} alt={`imagen de ${data.name}`} onLoad={() => setLoaded(true)}/>
            <h3>Status:</h3>
            <ul>
            {Array.isArray(data.status) ? (
            data.status.map((status) => <li key={status}>{status}</li>)
            ) : (
            <li key={data.status}>{data.status}</li>
            )}
            </ul>
            <h3>Species: </h3>
            <ul>
            {Array.isArray(data.species) ? (
            data.species.map((species) => <li key={species}>{species}</li>)
            ) : (
            <li key={data.species}>{data.species}</li>
            )}
            </ul>
        </article>
    )
}


export default RickMorty;
