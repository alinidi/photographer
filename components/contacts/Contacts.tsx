"use client";

import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import style from "./Contacts.module.scss";
import x from "../../public/images/close.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const ContactsPage = () => {
    const router = useRouter();

    const handleClose = () => {
        router.back();
    };

    return (
        <div className={style.overlay}>
            <div className={style.modal}>
                <Image src={x} alt="close" className={style.close} onClick={handleClose} />
                <Input placeholder="your name" />
                <Input placeholder="+1" />
                <Button name="book now" />
            </div>
        </div>
    );
};
