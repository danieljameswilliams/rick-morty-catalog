import { Collapable } from "../../../../../../../../components/Collapable/Collapable";
import S from "./Extra.module.scss";
import { ExtraProps } from "./ExtraProps";

export const Extra = (props: ExtraProps) => {
    return (
        <section className={S.extra}>
            <td className={S.extraCell} colSpan={7}>
                <Collapable className={S.inner} open={props.open}>
                    <img src={props.image} alt={props.name} />
                </Collapable>
            </td>
        </section>
    );
};