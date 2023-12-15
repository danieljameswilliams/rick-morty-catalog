import { forwardRef } from "react";
import { cn } from "../../helpers/classNames";

import { CollapsableProps } from "./CollapsableProps";
import S from "./Collapsable.module.scss";

export const Collapsable = forwardRef<HTMLDivElement, CollapsableProps>((props, ref) => {
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

Collapsable.displayName = "Collapsable";