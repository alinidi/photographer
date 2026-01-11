import Link from "next/link";
import style from "../Nav/Nav.module.scss";
import { usePathname } from "next/navigation";

export const Nav = () => {
    const pathname = usePathname();
    const menu = [
        {
            name: "about me",
            link: "/about",
        },
        {
            name: "portfolio",
            link: "/portfolio",
        },
        {
            name: "price",
            link: "/price",
        },
        {
            name: "faq",
            link: "/faq",
        },
        {
            name: "contacts",
            link: "/contacts",
        },
    ];

    return (
        <nav className={style.nav}>
            <ul className={style.navList}>
                {menu.map(item => {
                    const isActive = pathname === item.link;

                    return (
                        <li key={item.name} className={style.navListItem}>
                            <Link
                                href={item.link}
                                className={`${style.navListLink} ${isActive ? style.active : ""}`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
