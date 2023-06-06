import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class AjaxApi extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        res.results.forEach((pokemon) => {
          fetch(pokemon.url)
            .then((res) => res.json())
            .then((res) => {
              let pokemon = {
                id: res.id,
                name: res.name,
                avatar: res.sprites.front_default,
              };

              //spreed operataro
              let pokemons = [...this.state.pokemons, pokemon];

              this.setState({ pokemons });
            });
        });
      });
  }

  render() {
    return (
      <>
        <h2>Peticiones asincrodas en componentes de clase</h2>
        {this.state.pokemons.length === 0 ? (
          <h3>Cargando</h3>
        ) : (
          this.state.pokemons.map((pokemon) => (
            <Pokemon
              key={pokemon.id}
              avatar={pokemon.avatar}
              name={pokemon.name}
            />
          ))
        )}
      </>
    );
  }
}
