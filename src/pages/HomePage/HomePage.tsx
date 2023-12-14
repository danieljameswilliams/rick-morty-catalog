import { useCallback } from "react";
import { useCharacters } from "../../contexts/characters.context";

import { Filter } from "./components/Filter/Filter";
import { Pagination } from "./components/Pagination/Pagination";
import { Table } from "./components/Table/Table";
import S from "./HomePage.module.scss";

export const HomePage = () => {
    const { characters, viewState, showPagination, paginate, filter } = useCharacters();

    const onFilterChanged = useCallback((query: string) => {
        if (typeof (filter) !== "undefined") {
            filter({ name: query });
        }
    }, [filter]);

    return (
        <div className={S.container}>
            <h1 className={S.headline}>The Rick and Morty Overview</h1>

            <div className={S.inner}>
                {/* Filter */}
                <Filter onChange={onFilterChanged} />

                {/* Success */}
                {["SUCCESS", "PAGINATING"].includes(viewState) ? (
                    <div className={S.list}>
                        {/* List */}
                        <Table characters={characters} />

                        {/* Pagination */}
                        {showPagination ? (
                            <Pagination paginate={paginate} disabled={viewState === "PAGINATING"} />
                        ) : null}
                    </div>
                ) : null}
            </div>

            {/* Loading */}
            {viewState === "LOADING" ? (
                <div>TODO: Loading</div>
            ) : null}

            {/* Error */}
            {["NOT_FOUND", "INTERNAL_ERROR"].includes(viewState) ? (
                <div>TODO: Error</div>
            ) : null}
        </div>
    );
};