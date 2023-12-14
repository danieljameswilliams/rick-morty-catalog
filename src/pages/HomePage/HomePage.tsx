import { MouseEvent, useEffect } from "react";
import { useCharacters } from "../../contexts/characters.context";
import { Table } from "./components/Table/Table";

import S from "./HomePage.module.scss";

export const HomePage = () => {
    const { characters, viewState, paginate } = useCharacters();

    const onButtonClicked = (event: MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault();

        paginate();
    };

    return (
        <div className={S.container}>
            <h1 className={S.headline}>The Rick and Morty Overview</h1>

            {/* Success */}
            {["SUCCESS", "PAGINATING"].includes(viewState) ? (
                <div>
                    <Table characters={characters} />

                    <button onClick={onButtonClicked} disabled={viewState === "PAGINATING"}>Fetch more</button>
                </div>
            ) : null}

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