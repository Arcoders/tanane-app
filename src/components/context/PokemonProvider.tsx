import React, { ReactNode } from 'react';
import { PokemonContext } from './PokemonContext';
import usePokemonList from '../../hooks/usePokemonList';

type PokemonProviderProps = {
  children: ReactNode;
}

export const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const pokemonData = usePokemonList();
  return (
    <PokemonContext.Provider value={pokemonData}>
      {children}
    </PokemonContext.Provider>
  );
};
