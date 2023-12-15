import { Collapsable } from "../../../../../../../../components/Collapsable/Collapsable";

import { EpisodeTable } from "./components/EpisodeTable/EpisodeTable";
import { ExtraProps } from "./ExtraProps";
import S from "./Extra.module.scss";

export const Extra = (props: ExtraProps) => {
    return (
        <section className={S.extra}>
            <td className={S.extraCell} colSpan={7}>
                <Collapsable className={S.collapsable} open={props.open}>
                    <div className={S.inner}>
                        {/* Image */}
                        <div>
                            <img src={props.image} alt={props.name} loading="lazy" />
                        </div>

                        {/* Content */}
                        <div className={S.content}>
                            <div className={S.info}>
                                <h1>{props.name}</h1>
                                <span>{props.status} - {props.species}</span>
                            </div>

                            <div className={S.location}>
                                <span className={S.heading}>Last known location:</span>
                                <span>{props.location ? props.location?.name : "-"}</span>
                            </div>
                        </div>

                        {/* Episodes */}
                        {/* TODO: Implement InView fetch instead of props.open */}
                        {props.episode?.[0] && props.open ? (
                            <EpisodeTable episodeUrls={props.episode} />
                        ) : null}
                    </div>
                </Collapsable>
            </td>
        </section>
    );
};