import style from "./Button.module.scss";

type Props = {
    name: string;
    isDisabled?: boolean;
    onClick?: () => void;
};

export const Button = ({ name }: Props) => {
    return <button className={style.button}>{name}</button>;
};
