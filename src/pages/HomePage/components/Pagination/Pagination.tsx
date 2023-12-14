import { MouseEvent, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { PaginationProps } from "./PaginationProps";
import S from "./Pagination.module.scss";

export const Pagination = (props: PaginationProps) => {
    const { paginate } = props;
    
    const { ref, inView } = useInView();

    const onButtonClicked = (event: MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault();
        
        if (typeof(paginate) !== "undefined") {
            paginate();
        }
    };
    
    // Update

    useEffect(() => {
        if (inView && typeof(paginate) !== "undefined") {
            paginate();
        }
    }, [inView, paginate]);

    return (
        <button className={S.button} onClick={onButtonClicked} ref={ref}>Fetch more</button>
    );
};