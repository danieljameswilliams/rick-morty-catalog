import { CardProps } from "./CardProps";
import S from "./Card.module.scss";

export const Card = (props: CardProps) => {
    return (
        <div className={S.card} role="button">
            <div className={S.imageCell}>
                <img className={S.image} src={props.image} alt={props.name} loading="lazy" />
            </div>

            <div className={S.content}>
                <div className={S.name}>{props.name}</div>

                <div className={S.info}>
                    <div className={S.headCell}>Gender</div>
                    <div className={S.cell}>{props.gender}</div>
                </div>

                <div className={S.info}>
                    <div className={S.headCell}>Status</div>
                    <div className={S.cell}>{props.status}</div>
                </div>

                <div className={S.info}>
                    <div className={S.headCell}>Species</div>
                    <div className={S.cell}>{props.species}</div>
                </div>

                <div className={S.info}>
                    <div className={S.headCell}>Location</div>
                    <div className={S.cell}>{props.location ? props.location?.name : "-"}</div>
                </div>

                <div className={S.info}>
                    <div className={S.headCell}>Episodes</div>
                    <div className={S.cell}>{props.episode?.[0] ? props.episode.length : "-"}</div>
                </div>
            </div>

            {/* TODO: Implement extra component */}
        </div>
    );
};