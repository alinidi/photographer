"use client";

import style from "./Header.module.scss";
import heartIcon from "../../../public/images/heart-icon.svg";
import Image from "next/image";
import { Menu } from "../Menu/Menu";

export const Header = () => {
    return (
        <header className={style.header}>
            <Image src={heartIcon} alt="heart-logo" />
            <Menu />
        </header>
    );
};
