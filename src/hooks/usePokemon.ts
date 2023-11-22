import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Poke from "../api";

const usePokemon = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [pokemon, setPokemon] = useState<any>(null);
  const { pokeId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await Poke.find(pokeId);
        setPokemon(pokemonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if(pokeId) fetchData();
  }, [pokeId]);

  return {
    pokemon,
    loading,
    error,
  };
};

export default usePokemon;