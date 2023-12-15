import { useCallback, useEffect, useMemo, useState } from "react";
import { Episode } from "../../../interfaces/character";
import axios from "axios";

type GetEpisodesViewState = "INIT" | "LOADING" | "SUCCESS" | "NOT_FOUND" | "INTERNAL_ERROR";

export const useEpisodes = (episodeUrls: string[]) => {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [viewState, setViewState] = useState<GetEpisodesViewState>("INIT");

    const request = useMemo(() => {
        return axios.create({ baseURL: "https://rickandmortyapi.com/api" });
    }, []);

    const fetchCharacters = useCallback(async () => {
        setViewState("LOADING");

        try {
            const commaSeparatedEpisodes = getEpisodesNumbers().join(",");
            console.log("commaSeparatedEpisodes,", commaSeparatedEpisodes);
            const url = `/episode/${commaSeparatedEpisodes}`;
            const response = await request.get<Episode[] | Episode>(url);

            // Error handling

            if (response.status === 404)
                throw new Error("NOT_FOUND");

            if (response.status === 500)
                throw new Error("INTERNAL_ERROR");

            // Success (Multiple)

            if (Array.isArray(response.data) && response.data?.[0]) {
                setEpisodes(response.data);
                setViewState("SUCCESS");
            }

            // Success (Single)

            else if (!Array.isArray(response.data) && response.data?.episode?.[0]) {
                setEpisodes([response.data]);
                setViewState("SUCCESS");
            }
        }
        catch (error: any) {
            if (error instanceof Error) {
                setViewState(error.message as GetEpisodesViewState);
            }
            else {
                setViewState("INTERNAL_ERROR");
            }
        }
    }, [request]);

    const getEpisodesNumbers = useCallback(() => {
        const result: string[] = [];

        episodeUrls.forEach((url) => {
            const match = url.match(/\/(\d+)$/);
            if (match) {
                result.push(match[1]);
            }
        });

        return result;
    }, [episodeUrls]);

    // Init

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);
    
    return {
        episodes,
        viewState
    };
};