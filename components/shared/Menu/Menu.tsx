import { Nav } from "../Nav/Nav";
import { useMobile } from "@/hooks/useMobile";
import style from "./Menu.module.scss";
import { useState } from "react";

export const Menu = () => {
    const isMobile = useMobile();
    const [isActive, setIsActive] = useState(false);

    const toggleBurger = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            {isMobile ? (
                <div
                    className={`${style.burger} ${isActive ? style.active : ""}`}
                    onClick={toggleBurger}
                >
                    <span className={style.burgerSpan}></span>
                </div>
            ) : (
                <Nav />
            )}
        </>
    );
};
