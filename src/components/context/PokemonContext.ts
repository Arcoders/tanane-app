import { createContext } from 'react';
import { TPokemonData } from '../../hooks/usePokemonList';

export const PokemonContext = createContext<TPokemonData | null>(null);
