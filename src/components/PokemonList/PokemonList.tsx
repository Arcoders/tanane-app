import { Alert } from 'tanane-lib-ui';

import PokemonCard from "../PokemonCard";
import Skeleton from '../Skeleton';
import { usePokemonData } from '../context/usePokemonData';
import { TPokemon } from "../../types";
import './PokemonList.scss'

const PokemonList = () => {
  const data = usePokemonData();

  if (!data) return null;

  const { data: { pokemons }, error, loading, page: { itemsPerPage } } = data;

  return (
    <>
      <Alert message={error?.message} variant="danger" />
      <div className="list">
        <Skeleton length={itemsPerPage} display={loading || !!error} modifier="list--card" />
        {pokemons.map((pokemon: TPokemon) => (<PokemonCard {...pokemon} key={pokemon.name} />))}
      </div>
    </>
  );
}

export default PokemonList;
