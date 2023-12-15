import { MouseEvent, useState } from "react";

import { Extra } from "./components/Extra/Extra";
import { RowProps } from "./RowProps";
import S from "./Row.module.scss";

export const Row = (props: RowProps) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    
    const onRowClicked = (event: MouseEvent<HTMLDivElement>) => {
        event?.preventDefault();
        
        setShowDetails(x => !x);
    };

    return (
        <>
            <div className={S.row} role="button" onClick={onRowClicked}>
                <div className={S.imageCell}>
                    <img className={S.image} src={props.image} alt={props.name} loading="lazy" />
                </div>
                
                <div className={S.cell}>{props.name}</div>

                <div className={S.cell}>{props.gender}</div>
                
                <div className={S.cell}>{props.status}</div>

                <div className={S.cell}>{props.species}</div>

                <div className={S.cell}>{props.location ? props.location?.name : "-"}</div>

                <div className={S.cell}>{props.episode?.[0] ? props.episode.length : "-"}</div>
            </div>

            <Extra {...props} open={showDetails} />
        </>
    );
};