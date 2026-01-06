"use client";

import { createContext, ReactNode, useState } from "react";

export type MenuContextType = {
    isMenuOpen: boolean;
    toggleMenu: () => void;
};

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>{children}</MenuContext.Provider>
    );
}
