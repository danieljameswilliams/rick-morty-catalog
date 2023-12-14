import { forwardRef } from "react";
import { cn } from "../../helpers/classNames";

import { CollapableProps } from "./CollapableProps";
import S from "./Collapable.module.scss";

export const Collapable = forwardRef<HTMLDivElement, CollapableProps>((props, ref) => {
    const { className, open, ...args } = props;

    const isOpenClass = open === true ? S.isOpen : undefined;

    return (
        <div {...args} className={cn(S.wrapper, isOpenClass, className)} ref={ref}>
            <div className={cn(S.inner, props.className)}>
                {props.children}
            </div>
        </div>
    );
});

Collapable.displayName = "Collapable";