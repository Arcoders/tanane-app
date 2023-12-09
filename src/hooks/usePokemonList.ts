import { useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Pokemon } from "../api";
import { TPokemons } from '../types';
import { ITEMS_PER_PAGE } from "../commons/constants";

type Page = { itemsPerPage: number, currentPage: number }

export type TPokemonData = { 
  page: Page
  data: TPokemons , 
  loading: boolean, 
  error: Error | null, 
  handleOnPageChange: (page: Page) => void,
}

const usePokemonList = () => {
  const [searchParams] = useSearchParams();
  const persistedCount = useRef<number>(0);
  const navigate = useNavigate();

  const [page, setPage] = useState({
    itemsPerPage: ITEMS_PER_PAGE,
    currentPage: (Number(searchParams.get("page")) || 1)
  });

  const handleOnPageChange = (newPage: Page) => {
    setPage({ ...page, ...newPage });
    navigate(`/?page=${newPage.currentPage}`);
  }

  const query = `limit=${page.itemsPerPage}&offset=${(page.currentPage - 1) * page.itemsPerPage}`;

  const {
    data = {
      next: null,
      pokemons: [],
      previous: null,
      count: persistedCount.current
    },
    isLoading: loading,
    error
  } = useQuery<TPokemons>({
    queryFn: () => Pokemon.list(query),
    queryKey: ['pokemonList', query],
  })

  persistedCount.current = data.count;

  return { data, loading, error, handleOnPageChange, page };
};

export default usePokemonList;