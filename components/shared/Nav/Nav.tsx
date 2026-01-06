import style from "../Nav/Nav.module.scss";

export const Nav = () => {
    const menu = ["about me", "portfolio", "price", "faq", "contacts"];

    return (
        <nav className={style.nav}>
            <ul className={style.navList}>
                {menu.map(item => (
                    <li key={item} className={style.navListItem}>
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
