import { MouseEvent, useState } from "react";
import { Character } from "../../../../../../interfaces/character";

import S from "./Row.module.scss";
import { Extra } from "./components/Extra/Extra";

// TODO: Make RowProps extends Character
// TODO: Make table divs
export const Row = (props: Character) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    
    const onRowClicked = (event: MouseEvent<HTMLDivElement>) => {
        event?.preventDefault();
        
        setShowDetails(x => !x);
    };

    return (
        <>
            <div className={S.row} role="button" onClick={onRowClicked}>
                <div className={S.imageCell}>
                    <img className={S.image} src={props.image} alt={props.name} />
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