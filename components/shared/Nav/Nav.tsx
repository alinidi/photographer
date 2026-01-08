import Link from "next/link";
import style from "../Nav/Nav.module.scss";

export const Nav = () => {
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
                {menu.map(item => (
                    <li key={item.name} className={style.navListItem}>
                        <Link href={item.link} className={style.navListLink}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
