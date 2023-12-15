import { ReactNode } from "react";

export interface CollapsableProps {
    open?: boolean;

    className?: string;
    children?: ReactNode;
}