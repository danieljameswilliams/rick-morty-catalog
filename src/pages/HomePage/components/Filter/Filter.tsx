import { DebouncedInput } from "../../../../components/DebouncedInput/DebouncedInput";
import { useCallback } from "react";

import { FilterProps } from "./FilterProps";
import S from "./Filter.module.scss";

export const Filter = (props: FilterProps) => {
    const { onChange } = props;

    const onInputChange = useCallback((query: string) => {
        if (typeof(onChange) !== "undefined") {
            onChange(query);
        }
    }, [onChange]);

    // TODO: Make sort option if API supports it
    // TODO: Make filter select on Dead/Alive etc.

    return (
        <form className={S.form} noValidate>
            <DebouncedInput className={S.input} placeholder="Search" onChange={onInputChange} autoComplete="off" />
        </form>
    );
};