import { ChangeEvent } from "react";

import { InputProps } from "./InputProps";
import S from "./Input.module.scss";
import { cn } from "../../helpers/classNames";

export const Input = (props: InputProps) => {
    const { viewState, label, name, helperText, onChange, ...args } = props;

    const invalidClass = viewState === "invalid" ? S.isInvalid : undefined;
    const successClass = viewState === "success" ? S.isSuccess : undefined;

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        if (typeof (onChange) !== "undefined") {
            onChange(event);
        }
    };

    return (
        <label className={cn(S.wrapper, invalidClass, successClass, props.className)} htmlFor={name}>
            {/* Label */}
            {label ? (
                <div className={S.header}>
                    <span className={S.label}>{label}</span>
                </div>
            ) : null}

            {/* Content */}
            <div className={S.content}>
                {/* Input */}
                <input {...args} className={S.input} name={name} id={name} onChange={onInputChange} />
            </div>

            {/* Helper text */}
            {helperText ? (
                <span className={S.helperText}>{helperText}</span>
            ) : null}
        </label>
    );
};