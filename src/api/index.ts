import { DOMAIN_API, DEFAULT_ERROR_MESSAGE } from "../commons/constants";

interface IPokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}

interface Result {
  name: string;
  url: string;
}

interface IPokemonData {
  name: string;
  image: string;
}

export interface IPokeAll {
  count: number;
  pokemons: IPokemonData[];
}

interface IPokemonDetails {
  name: string;
  image: string;
  sprites: {
    front_default: string
  }
}

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(DEFAULT_ERROR_MESSAGE);
  }
  return response.json();
}

const Post = {
  async all(query: string): Promise<IPokeAll> {
    try {
      const data: IPokemonList = await fetchData<IPokemonList>(`${DOMAIN_API}/${query}`);
      const { results, count } = data;

      const pokemons: IPokemonData[] = await Promise.all(
        results.map(async (pokemon) => {
          try {
            const pokemonDetails = await fetchData<IPokemonDetails>(pokemon.url);
            return {
              name: pokemonDetails.name,
              image: pokemonDetails.sprites.front_default,
            };
          } catch (error) {
            console.error(`Error fetching details for ${pokemon.name}: ${error}`);
            throw new Error(DEFAULT_ERROR_MESSAGE);
          }
        })
      );

      return { count, pokemons };
    } catch (error) {
      console.error(`Error fetching Pokemon data: ${error}`);
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }
  },

  async find(pokeName?: string): Promise<IPokemonData> {
    try {
      const data: IPokemonData = await fetchData<IPokemonData>(`${DOMAIN_API}/${pokeName}`);
      return data;
    } catch (error) {
      console.error(`Error finding Pokemon ${pokeName}: ${error}`);
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }
  },
};

export default Post;
