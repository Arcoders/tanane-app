import { useNavigate } from "react-router-dom";

import PokemonCard from "../PokemonCard";
import Pagination from "../Pagination";
import usePokemonList from "../../hooks/usePokemonList";
import './PokemonList.scss'

function PokemonList() {
  const navigate = useNavigate();

  const { data: { pokemons, count }, setCurrentPage, currentPage } = usePokemonList()

  const navigateTo = (page: number) => {
    navigate(`/?page=${page}`);
    setCurrentPage(page)
  }

  return (
    <>
      <Pagination
        totalPages={count}
        activePage={currentPage}
        paginationPagesPerSide={3}
        handleOnPageChange={({ currentPage }) => navigateTo(currentPage)}
      />

      <div className="list">
        {pokemons.map((pokemon: any) => (
          <PokemonCard {...pokemon} key={pokemon.name} />
        ))}
      </div>
    </>
  );
}

export default PokemonList;