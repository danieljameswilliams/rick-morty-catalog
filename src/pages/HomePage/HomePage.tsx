import { useCallback } from "react";
import { useCharacters } from "../../contexts/useCharacters";
import { useScreen } from "../../contexts/useScreen";

import { Filter } from "./components/Filter/Filter";
import { ListDesktop } from "./components/ListDesktop/ListDesktop";
import { ListMobile } from "./components/ListMobile/ListMobile";
import { Pagination } from "./components/Pagination/Pagination";
import S from "./HomePage.module.scss";

export const HomePage = () => {
    const { isScreenMobile } = useScreen();
    
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
                        {isScreenMobile ? (
                            <ListMobile characters={characters} />
                        ) : (
                            <ListDesktop characters={characters} />
                        )}

                        {/* Pagination */}
                        {showPagination ? (
                            <Pagination paginate={paginate} disabled={viewState === "PAGINATING"} />
                        ) : null}
                    </div>
                ) : null}
            </div>

            {/* Loading */}
            {/* TODO: Show only loading if >250ms */}
            {viewState === "LOADING" ? (
                <div className={S.loading}>Loading</div>
            ) : null}

            {/* Error */}
            {["NOT_FOUND", "INTERNAL_ERROR"].includes(viewState) ? (
                <div>Oh no! Seems you're in a pickle, Rick!</div>
            ) : null}
        </div>
    );
};