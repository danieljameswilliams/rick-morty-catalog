import { useEpisodes } from "../../../../../../../../hooks/useEpisodes";

import { EpisodeTableProps } from "./EpisodeTableProps";
import S from "./EpisodeTable.module.scss";

export const EpisodeTable = (props: EpisodeTableProps) => {
    const { episodes, viewState } = useEpisodes(props.episodeUrls);

    return (
        <>
            {/* Success */}
            {viewState === "SUCCESS" ? (
                <div className={S.table}>
                    <div className={S.tableHead}>
                        <div className={S.headCell}>Name</div>
                        <div className={S.headCell}>Season</div>
                        <div className={S.headCell}>Episode</div>
                    </div>

                    {/* TODO: Make table layout */}
                    {/* TODO: Get rich episode data */}
                    <div className={S.tableBody}>
                        {episodes.map((episode: any) => {
                            const getEpisode = (episode: string) => {
                                const match = episode.match(/E(\d+)/);
                                return match ? parseInt(match[1], 10) : null;
                            };

                            const getSeason = (episode: string) => {
                                const match = episode.match(/S(\d+)/);
                                return match ? parseInt(match[1], 10) : null;
                            };

                            return (
                                <div className={S.episode} key={episode.id}>
                                    <div className={S.cell}>{episode.name}</div>
                                    <div className={S.cell}>{getEpisode(episode.episode)}</div>
                                    <div className={S.cell}>{getSeason(episode.episode)}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : null}

            {/* Loading */}
            {/* TODO: Show only loading if >250ms */}
            {viewState === "LOADING" ? (
                <div>Loading</div>
            ) : null}

            {/* Error */}
            {["NOT_FOUND", "INTERNAL_ERROR"].includes(viewState) ? (
                <div>Oh no! Seems you're in a pickle, Rick!</div>
            ) : null}
        </>
    );
};