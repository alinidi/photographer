"use client";

import style from "./Header.module.scss";
import heartIcon from "../../../public/images/heart-icon.svg";
import Image from "next/image";
import { Menu } from "../Menu/Menu";
import Link from "next/link";

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <Link href={"/"}>
                    <Image src={heartIcon} alt="heart-logo" />
                </Link>
                <Menu />
            </div>
        </header>
    );
};
