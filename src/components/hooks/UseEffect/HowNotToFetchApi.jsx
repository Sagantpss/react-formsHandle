import { useEffect, useState } from "react";

export const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // This code using Promise method
  // const fectchPokemon = () => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setApiData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(error);
  //       setLoading(false);
  //     });
  // };


  // This code using async await method
  const fectchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setApiData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fectchPokemon();
  }, []);

  console.log(apiData);

  if (loading) {
    return(
        <div className="container">
            <h2>Loading...</h2>
        </div>
    )
  };
  if (error) {
    return(
        <div className="container">
            <h2>Error: {error.message}</h2>
        </div>
    )
  };


    return (
      <div className="container">
        <ul className="list">
          {/* {apiData.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })} */}
          <figure>
            <img
              src={apiData.sprites.other.home.front_default}
              alt={apiData.name}
              width={200}
              height={200}
            />
          </figure>
          <h2>{apiData.name}</h2>
          <p><b>Height:</b> {apiData.height}</p>
          <p><b>Weight:</b> {apiData.weight}</p>
          <p><b>Abilities:</b> {apiData.abilities[0].ability.name}</p>
          <p><b>Moves:</b> {apiData.moves[0].move.name}</p>
          <p><b>Types:</b> {apiData.types[0].type.name}</p>
          <p><b>Species:</b> {apiData.species.name}</p>
          <p><b>Base Experience:</b> {apiData.base_experience}</p>
        </ul>
      </div>
    );
};
