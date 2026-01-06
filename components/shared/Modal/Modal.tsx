import { Input } from "@/components/ui/Input/Input";
import style from "./Modal.module.scss";
import { Button } from "@/components/ui/Button/Button";
import { X } from "lucide-react";

type Props = {
    title: string;
    firstInputText: string;
    secondInputText: string;
    buttonText: string;
    onClose?: () => void;
};

export const Modal = ({ title, firstInputText, secondInputText, buttonText, onClose }: Props) => {
    return (
        <div className={style.modal} onClick={e => e.stopPropagation()}>
            <X className={style.modalClose} size={24} onClick={onClose} />
            <h2 className={style.modalTitle}>{title}</h2>
            <div className={style.modalContent}>
                <Input placeholder={firstInputText} />
                <Input placeholder={secondInputText} />
                <Button name={buttonText} />
            </div>
        </div>
    );
};
