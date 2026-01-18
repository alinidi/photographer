import { Button } from "@/components/ui/Button/Button";
import style from "./Footer.module.scss";
import Link from "next/link";
import { Input } from "@/components/ui/Input/Input";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <h3 className={style.title}>Like my portfolio? Sign up for a shoot!</h3>
            <div className={style.inputsWrapper}>
                <Input placeholder="your name" />
                <Input placeholder="+1" />
                <Button name="book now" />
            </div>
            <div className={style.contactMe}>
                <Link href="https://www.instagram.com" target="_blank">
                    instagram
                </Link>
                <Link href="https://www.telegram.org" target="_blank">
                    telegram
                </Link>
                <Link href="https://wa.me/" target="_blank">
                    whatsapp
                </Link>
                <Link href="tel:+1 234 9843572">+1 234 9843572</Link>
            </div>
        </footer>
    );
};
