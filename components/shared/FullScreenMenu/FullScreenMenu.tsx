import { createPortal } from "react-dom";
import { Navigation } from "../Navigation/Navigation";

export const FullScreenMenu = () => {
    return createPortal(<Navigation />, document.body);
};
