import { useEffect, useState } from "react";

export const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState();
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const fectchPokemon = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fectchPokemon();
  }, []);

  console.log(apiData);

  if (apiData) {
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
        </ul>
      </div>
    );
  }
};
