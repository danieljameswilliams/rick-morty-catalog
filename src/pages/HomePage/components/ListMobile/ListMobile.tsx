import { Card } from "./components/Card/Card";
import { Character } from "../../../../interfaces/character";

import { ListMobileProps } from "./ListMobileProps";
import S from "./ListMobile.module.scss";

export const ListMobile = (props: ListMobileProps) => {
    return (
        <div className={S.table}>
            <div className={S.tableHead}>
            </div>

            <div className={S.tableBody}>
                {props.characters.map((character: Character) => (
                    <Card key={character.id} {...character} />
                ))}
            </div>
        </div>
    );
};