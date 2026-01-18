import Link from "next/link";
import style from "./Navigation.module.scss";
import { useMenuContext } from "@/hooks/useMenuContext";

export const Navigation = () => {
    const { toggleMenu } = useMenuContext();
    const menu = ["about me", "portfolio", "price", "faq", "contacts"];

    const handleLinkClick = () => {
        toggleMenu();
    };

    return (
        <nav className={style.nav}>
            <ul className={style.navList}>
                {menu.map(item => (
                    <Link
                        key={item}
                        className={style.navListItem}
                        href={item.split(" ")[0]}
                        onClick={handleLinkClick}
                    >
                        {item}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};
