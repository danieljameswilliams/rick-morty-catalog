import { cn } from "@/helpers/classNames";

import { ButtonProps } from "./ButtonProps";
import S from "./Button.module.scss";

export const Button = (props: ButtonProps) => {
    const { children, className, size, ...args } = props;

    return (
        <button className={cn(S.button, className)} {...args}>
            {children}
        </button>
    );
};