import { Character } from "../../../../interfaces/character";
import { Row } from "./components/Row/Row";

import S from "./Table.module.scss";
import { TableProps } from "./TableProps";

export const Table = (props: TableProps) => {
    return (
        <div className={S.table}>
            <div className={S.tableHead}>
                <div className={S.headCell}>&nbsp;</div>
                <div className={S.headCell}>Name</div>
                <div className={S.headCell}>Gender</div>
                <div className={S.headCell}>Status</div>
                <div className={S.headCell}>Species</div>
                <div className={S.headCell}>Location</div>
                <div className={S.headCell}>Episodes</div>
            </div>
            
            <div className={S.tableBody}>
                {props.characters.map((character: Character) => (
                    <Row key={character.id} {...character} />
                ))}
            </div>
        </div>
    );
};