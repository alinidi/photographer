import style from "./LeftSection.module.scss";

export const LeftSection = () => {
    return (
        <div className={style.leftSection}>
            <div className={style.content}>
                <span>2025</span>
                <span className={style.divider}></span>
                <span>Best photographer by Photo Awards</span>
            </div>
        </div>
    );
};
