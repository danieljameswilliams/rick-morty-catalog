import { InputHTMLAttributes } from "react";

export interface DebouncedInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    onChange: (query: string) => void;
    delay?: number;
}