import { DebouncedInput } from "../../../../components/DebouncedInput/DebouncedInput";

import { FilterProps } from "./FilterProps";
import S from "./Filter.module.scss";
import { useCallback } from "react";

export const Filter = (props: FilterProps) => {
    const { onChange } = props;

    const onInputChange = useCallback((query: string) => {
        if (typeof(onChange) !== "undefined") {
            onChange(query);
        }
    }, [onChange]);

    return (
        <form className={S.form} noValidate>
            <DebouncedInput className={S.input} placeholder="Search" onChange={onInputChange} autoComplete="off" />
        </form>
    );
};