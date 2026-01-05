import { Input } from "@/components/ui/Input/Input";
import style from "./Modal.module.scss";
import { Button } from "@/components/ui/Button/Button";
import { X } from "lucide-react";

type Props = {
    title: string;
    firstInputText: string;
    secondInputText: string;
    buttonText: string;
};

export const Modal = ({ title, firstInputText, secondInputText, buttonText }: Props) => {
    return (
        <div className={style.modal}>
            <X className={style.modalClose} size={24} />
            <h2 className={style.modalTitle}>{title}</h2>
            <div className={style.modalContent}>
                <Input placeholder={firstInputText} />
                <Input placeholder={secondInputText} />
                <Button name={buttonText} />
            </div>
        </div>
    );
};
