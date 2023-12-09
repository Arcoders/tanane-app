import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from 'react-icons/fa';
import { Button, Alert } from 'tanane-lib-ui';

import usePokemon from "../../hooks/usePokemon";
import Skeleton from "../Skeleton";
import './PokemonDetail.scss'

const PokemonDetail = () => {
  const navigate = useNavigate()
  const { pokemon, error, loading } = usePokemon();

  return (
    <div className="detail">
      <Alert message={error?.message} variant="danger" />
      <Skeleton display={loading || !!error} modifier="detail--card" />
      {pokemon && <>
        <Button variant="text" onClick={() => navigate(-1)}><FaChevronLeft /></Button>
        <h1 className="detail__title">{pokemon.name}</h1>
        <img className="detail__image" src={pokemon.image} alt={pokemon.name} />
        <div className="detail__info">
          <p>Height: {pokemon.height} meters</p>
          <p>Weight: {pokemon.weight} kilograms</p>
          <p>Abilities: {pokemon.abilities}</p>
          <p>Types: {pokemon.types}</p>
        </div>
      </>}
    </div>

  );
};

export default PokemonDetail;