"use client";

import { MenuContext } from "@/context/MenuProvider";
import { useContext } from "react";

export const useMenuContext = () => {
    const menuContext = useContext(MenuContext);
    if (!menuContext) throw new Error("useMenuProvider must be used with MenuContextProvider");
    return menuContext;
};
