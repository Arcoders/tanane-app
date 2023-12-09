import { useState,  } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import { Pagination as PaginationUI, Button } from 'tanane-lib-ui';

import { usePokemonData } from '../context/usePokemonData';
import './Pagination.scss';

const Pagination = () => {
    const [simple, setSimple] = useState<boolean>(false);
    const data = usePokemonData();

    if (!data) return null;

    const { data: { count }, page: { currentPage, itemsPerPage }, handleOnPageChange } = data;

    return (
        <div className="pagination">
            <Button
                variant="text"
                modifiers={'pagination--toggle'}
                onClick={() => setSimple(!simple)}>
                <FaExchangeAlt />
            </Button>
            <PaginationUI
                simple={simple}
                visiblePages={5}
                totalItems={count}
                currentPage={currentPage}
                onPageChange={handleOnPageChange}
                defaultItemsPerPage={itemsPerPage}
            />
            {simple && <span>{currentPage} / {Math.ceil(count / itemsPerPage)}</span>}
        </div>
    );
}

export default Pagination;