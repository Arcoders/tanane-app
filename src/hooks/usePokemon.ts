import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Pokemon } from "../api";
import { TPokemonDetails } from "../types";
import ballImage from "../assets/ball.png";

const usePokemon = () => {
  const { pokeId } = useParams();

  const { data: pokemon, isLoading: loading, error } = useQuery<TPokemonDetails>({
    queryFn: () => Pokemon.find(pokeId),
    queryKey: ['pokemonDetails', pokeId],
  })

  return { loading, pokemon: buildPokemonData(pokemon), error };
};

export default usePokemon;

const buildPokemonData = (pokemon?: TPokemonDetails) => {
  if (!pokemon) return null;

  const abilities = pokemon.abilities?.map(({ ability }) => ability.name).join(', ');
  const types = pokemon.types?.map(({ type }) => type.name).join(', ');

  const image =
    pokemon.sprites?.other &&
    pokemon.sprites.other['official-artwork']?.front_default ||
    pokemon.sprites?.front_default || ballImage;

  const formattedData = {
    abilities,
    types,
    image,
    name: pokemon.name?.split('-')[0],
    height: Math.ceil((pokemon.height / 10)),
    weight: Math.ceil((pokemon.weight / 10))
  };

  return formattedData;
};