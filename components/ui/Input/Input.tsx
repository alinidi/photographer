import style from "./Input.module.scss";

type Props = {
    placeholder: string;
};

export const Input = ({ placeholder }: Props) => {
    return <input className={style.input} type="text" placeholder={placeholder} />;
};
