import { ReactNode } from "react";

export interface CollapableProps {
    open?: boolean;

    className?: string;
    children?: ReactNode;
}