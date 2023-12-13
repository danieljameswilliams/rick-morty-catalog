import { cn } from "@/helpers/classNames";
import { forwardRef } from "react";

import { CollapableProps } from "./CollapableProps";
import S from "./Collapable.module.scss";

export const Collapable = forwardRef<HTMLDivElement, CollapableProps>((props, ref) => {
    const { className, open, ...args } = props;

    const isOpenClass = open === true ? S.isOpen : undefined;

    return (
        <div {...args} className={cn(S.wrapper, isOpenClass)} ref={ref}>
            <div className={cn(S.inner, props.className)}>
                {props.children}
            </div>
        </div>
    );
});

Collapable.displayName = "Collapable";