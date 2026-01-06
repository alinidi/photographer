"use client";

import { createPortal } from "react-dom";
import { Navigation } from "../Navigation/Navigation";
import { useMenuContext } from "@/hooks/useMenuContext";
import { useMobile } from "@/hooks/useMobile";
import { useEffect } from "react";

export const FullMenuPortal = () => {
    const { isMenuOpen, toggleMenu } = useMenuContext();
    const isMobile = useMobile();

    useEffect(() => {
        if (isMobile !== null && !isMobile && isMenuOpen) {
            toggleMenu();
        }
    }, [isMobile, isMenuOpen, toggleMenu]);

    if (typeof document === "undefined" || !isMenuOpen) return null;

    return createPortal(<Navigation />, document.body);
};
