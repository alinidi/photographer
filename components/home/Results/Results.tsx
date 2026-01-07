import style from "./Results.module.scss";

export const Results = () => {
    return (
        <div className={style.resultsContainer}>
            <div className={style.result}>
                <span className={style.resultCount}>+</span>
                <div>
                    <span className={style.resultCount}>487</span>
                    <span className={style.resultTitle}>Photo sessions</span>
                </div>
            </div>
            <div className={style.result}>
                <span className={style.resultCount}>+</span>
                <div>
                    <span className={style.resultCount}>356</span>
                    <span className={style.resultTitle}>Satisfied clients</span>
                </div>
            </div>
        </div>
    );
};
