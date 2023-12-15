import { useDebounce } from "use-debounce";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Input } from "../Input/Input";

import { DebouncedInputProps } from "./DebouncedInputProps";

export const DebouncedInput = (props: DebouncedInputProps) => {
    const { delay, onChange, ...args} = props;

    const [currentQuery, setCurrentQuery] = useState<string>("");
    const [debouncedValue] = useDebounce(currentQuery, delay ?? 250);

    // TODO: Find a more elegant solution to this,
    // because effect is run when debouncedValue is initialized
    const isInitialMount = useRef<boolean>(true);

    const onInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCurrentQuery(value);
    };

    // Output

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        if (typeof (onChange) !== "undefined") {
            onChange(debouncedValue);
        }
    }, [debouncedValue, onChange]);

    return (
        <Input {...args} value={currentQuery} onChange={onInputChanged} />
    );
};