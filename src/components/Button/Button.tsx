import { cn } from "../../helpers/classNames";

import { ButtonProps } from "./ButtonProps";
import S from "./Button.module.scss";

export const Button = (props: ButtonProps) => {
    const { children, className, ...args } = props;

    return (
        <button className={cn(S.button, className)} {...args}>
            {children}
        </button>
    );
};