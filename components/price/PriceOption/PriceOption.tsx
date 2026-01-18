import { Button } from "@/components/ui/Button/Button";
import { Option } from "../PricePage";
import style from "./PriceOption.module.scss";

export const PriceOption = ({ title, options, price, subtitle }: Option) => {
    return (
        <div className={style.priceCard}>
            <div className={style.priceInfo}>
                <h2 className={style.priceCardName}>{title}</h2>
                <div className={style.priceCardOptions}>
                    {options.map(item => (
                        <div key={item}>
                            <ul className={style.option}>
                                <li>{item}</li>
                            </ul>
                        </div>
                    ))}
                </div>
                <span className={style.price}>€{price}</span>
            </div>
            <div className={style.buttonWrapper}>
                <p className={style.description}>{subtitle}</p>
                <Button name="book now" />
            </div>
        </div>
    );
};
