import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { Character, CharacterFilter, Info } from "../interfaces/character";

type GetCharactersViewState = "INIT" | "LOADING" | "PAGINATING" | "SUCCESS" | "NOT_FOUND" | "INTERNAL_ERROR";

interface CharactersContext {
    viewState: GetCharactersViewState;
    characters: Character[];
    showPagination: boolean;
    paginate: () => void;
    filter: (filter: CharacterFilter) => void;
}

const CharactersContext = createContext<CharactersContext>({} as CharactersContext);

export const CharactersProvider = ({ children }: any) => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [viewState, setViewState] = useState<GetCharactersViewState>("INIT");

    const paginationInfo = useRef<any>();

    const request = useMemo(() => {
        return axios.create({ baseURL: "https://rickandmortyapi.com/api" });
    }, []);

    const fetchCharacters = useCallback(async () => {
        setViewState(x => x === "INIT" ? "LOADING" : "PAGINATING");

        try {
            const url = paginationInfo.current?.next ? paginationInfo.current?.next : `/character?page=1`;
            const response = await request.get<Info<Character[]>>(url);

            // Error handling

            if (response.status === 404)
                throw new Error("NOT_FOUND");

            if (response.status === 500)
                throw new Error("INTERNAL_ERROR");

            // Success

            if (response.data.results?.[0]) {
                // Set next page url, count and pages
                paginationInfo.current = response.data.info;

                // Add to characters array
                setCharacters(x => [
                    ...(x ?? []),
                    ...(response.data.results ?? [])
                ]);

                // TODO: Check for no duplicates

                setViewState("SUCCESS");
            }
        }
        catch (error: any) {
            if (error instanceof Error) {
                setViewState(error.message as GetCharactersViewState);
            }
            else {
                setViewState("INTERNAL_ERROR");
            }
        }
    }, [request]);

    const filter = useCallback(async (filter: CharacterFilter) => {
        setViewState("LOADING");

        const params = new URLSearchParams(filter as any).toString();

        try {
            const url = `/character?${params}`;
            const response = await request.get<Info<Character[]>>(url);

            // Error handling

            if (response.status === 404)
                throw new Error("NOT_FOUND");

            if (response.status === 500)
                throw new Error("INTERNAL_ERROR");

            // Success

            if (response.data.results?.[0]) {
                // Set next page url, count and pages
                paginationInfo.current = response.data.info;

                // Add characters
                setCharacters(response.data.results);

                // TODO: Check for no duplicates

                setViewState("SUCCESS");
            }
        }
        catch (error: any) {
            if (error instanceof Error) {
                setViewState(error.message as GetCharactersViewState);
            }
            else {
                setViewState("INTERNAL_ERROR");
            }
        }
    }, [request]);

    // Pagination

    const paginate = useCallback(async () => {
        fetchCharacters();
    }, [fetchCharacters]);

    // Init

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    // Mappers

    const showPagination = useMemo(() => {
        // TODO: Fix
        return paginationInfo.current?.next ? true : false;
    }, [characters]);

    // Provider

    return (
        <CharactersContext.Provider value={{ characters, viewState, showPagination, paginate, filter }}>
            {children}
        </CharactersContext.Provider>
    );
};

export const useCharacters = (): CharactersContext => useContext(CharactersContext);