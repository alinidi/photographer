import { RefObject } from "react";

export const startScroll = (
    direction: "left" | "right",
    contentRef: RefObject<HTMLDivElement | null>,
    scrollIntervalRef: RefObject<NodeJS.Timeout | null>
) => {
    if (!contentRef.current) return;

    const scrollStep = direction === "left" ? -20 : 20;

    if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
    }

    scrollIntervalRef.current = setInterval(() => {
        if (contentRef.current) {
            contentRef.current.scrollLeft += scrollStep;
        }
    }, 30);
};

export const stopScroll = (scrollIntervalRef: RefObject<NodeJS.Timeout | null>) => {
    if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
    }
};
