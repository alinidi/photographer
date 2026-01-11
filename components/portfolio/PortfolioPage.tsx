"use client";

import Image from "next/image";
import style from "./PortfolioPage.module.scss";
import img from "../../public/images/portfolio/portfolio.svg";
import img1 from "../../public/images/portfolio/portfolio1.svg";
import img2 from "../../public/images/portfolio/portfolio2.svg";
import img3 from "../../public/images/portfolio/portfolio3.svg";
import img4 from "../../public/images/portfolio/portfolio4.svg";
import img5 from "../../public/images/portfolio/portfolio5.svg";
import img6 from "../../public/images/portfolio/portfolio6.svg";
import img7 from "../../public/images/portfolio/portfolio7.svg";
import img8 from "../../public/images/portfolio/portfolio8.svg";
import img9 from "../../public/images/portfolio/portfolio9.svg";
import img11 from "../../public/images/portfolio/portfolio11.svg";
import img12 from "../../public/images/portfolio/portfolio12.svg";
import { useRef, useEffect } from "react";
import { startScroll, stopScroll } from "@/utils/imgScrolling";

export const PortfolioPage = () => {
    const imgNames = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img11, img12];

    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;

        const leftZone = width * 0.3;
        const middleZoneEnd = width * 0.7;

        if (x < leftZone) {
            startScroll("left", contentRef, scrollIntervalRef);
        } else if (x > middleZoneEnd) {
            startScroll("right", contentRef, scrollIntervalRef);
        } else {
            stopScroll(scrollIntervalRef);
        }
    };

    const handleMouseLeave = () => {
        stopScroll(scrollIntervalRef);
    };

    useEffect(() => {
        return () => {
            stopScroll(scrollIntervalRef);
        };
    }, []);

    return (
        <div className={style.portfolio}>
            <div className={style.portfolioContainer}>
                <div className={style.portfolioText}>
                    <h1 className={style.portfolioTitle}>my portfolio</h1>
                    <p className={style.portfolioArticle}>Every shoot is a story...</p>
                </div>
                <div
                    className={style.contentWrapper}
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={style.portfolioContent} ref={contentRef}>
                        {imgNames.map((name, index) => (
                            <div key={index} className={style.portfolioItem}>
                                <Image src={name} alt="photo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
