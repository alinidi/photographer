import { Nav } from "../Nav/Nav";
import { useMobile } from "@/hooks/useMobile";
import style from "./Menu.module.scss";
import { useMenuContext } from "@/hooks/useMenuContext";

export const Menu = () => {
    const isMobile = useMobile();
    const { isMenuOpen, toggleMenu } = useMenuContext();

    return (
        <>
            {isMobile ? (
                <div
                    className={`${style.burger} ${isMenuOpen ? style.active : ""}`}
                    onClick={toggleMenu}
                >
                    <span className={style.burgerSpan}></span>
                </div>
            ) : (
                <Nav />
            )}
        </>
    );
};
