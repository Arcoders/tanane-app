import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Poke from "../api";

const usePokemonList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>({ count: 0, pokemons: [] });
  const [error, setError] = useState<any>(null);

  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState<number>(page)

  const ELEMENTS_PER_PAGE = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `?limit=${ELEMENTS_PER_PAGE}&offset=${(currentPage  - 1)* ELEMENTS_PER_PAGE}`;
        const response = await Poke.all(query);
        setData(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  return {
    data,
    loading,
    error,
    setCurrentPage,
    currentPage,
    elementsPerPage: ELEMENTS_PER_PAGE
  };
};

export default usePokemonList;