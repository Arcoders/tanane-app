import { PokemonProvider } from '../context/PokemonProvider';
import PokemonList from '../PokemonList';
import Pagination from '../Pagination';

const Home = () => {
  return (
    <PokemonProvider>
        <Pagination />
        <PokemonList />
    </PokemonProvider>
  );
};

export default Home;