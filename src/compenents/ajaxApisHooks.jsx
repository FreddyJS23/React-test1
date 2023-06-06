import React, { useState, useEffect } from "react";

const Pokemon = ({ avatar, name }) => {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

export default function AjaxHook() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    //con async y await
    const getPokemons = async (url) => {
      let res = await fetch(url);
      let json = await res.json();
      

       json.results.forEach(async (pokemons) => {
        let res = await fetch(pokemons.url);
        let json = await res.json();

        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };
        //se puede hacer una fucion dentro de la funcion set enviandole como paramatro la variable de estado
        //los tres puntos quieren decir destrucutara el array pokemons y añade pokemon
        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };
   
    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  /* 
  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((res) =>
        res.results.forEach((pokemons) => {
          fetch(pokemons.url)
            .then((res) => res.json())
            .then((res) => {
              let pokemon = {
                id: res.id,
                name: res.name,
                avatar: res.sprites.front_default,
              };
              //se puede hacer una fucion dentro de la funcion set enviandole como paramatro la variable de estado
              //los tres puntos quieren decir destrucutara el array pokemos y añade pokemon
              setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        })
      );
  }, []); */

  return (
    <>
      <h2>ajax con hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} name={pokemon.name} avatar={pokemon.avatar} />
        ))
      )}
    </>
  );
}
