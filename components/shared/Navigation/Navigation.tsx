import style from "./Navigation.module.scss";

export const Navigation = () => {
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
