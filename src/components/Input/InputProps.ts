import { ChangeEvent, InputHTMLAttributes } from "react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "name"> {
    name?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;

    label?: string;    
    helperText?: string;
    viewState?: "invalid" | "success";

    className?: string;
}