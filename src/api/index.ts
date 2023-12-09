import { DOMAIN_API } from "../commons/constants";
import {
  TPokemon,
  TPokemons,
  TPokemonInfo,
  TPokemonList,
  TPokemonDetails
} from '../types';
import { fetchUrl } from "./fetch-url";

export const Pokemon = {
  async list(query: string): Promise<TPokemons> {
    const {
      next,
      count,
      results,
      previous
    } = await fetchUrl<TPokemonList>(`${DOMAIN_API}/?${query}`);

    const pokemons: TPokemon[] = await Promise.all(
      results.map(async (pokemon) => {
        const pokemonDetails = await fetchUrl<TPokemonInfo>(pokemon.url);
        return {
          name: pokemonDetails.name,
          image: pokemonDetails.sprites.front_default,
        };

      })
    );
    return { next, count, pokemons, previous };
  },

  find(pokeName?: string): Promise<TPokemonDetails> {
    return fetchUrl<TPokemonDetails>(`${DOMAIN_API}/${pokeName}`);
  },
};
