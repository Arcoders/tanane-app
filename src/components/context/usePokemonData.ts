import { useContext } from 'react';

import { PokemonContext } from './PokemonContext';

export const usePokemonData = () => useContext(PokemonContext); 