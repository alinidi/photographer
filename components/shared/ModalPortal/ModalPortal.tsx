"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import style from "./ModalPortal.module.scss";
import { Modal } from "../Modal/Modal";

export const ModalPortal = () => {
    const originalOverflow = useRef<string>("");
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const body = document.body;

    useEffect(() => {
        if (isOpen) {
            originalOverflow.current = document.body.style.overflow;
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = originalOverflow.current;
        }

        return () => {
            document.body.style.overflow = originalOverflow.current;
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleCloseModal();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, handleCloseModal]);

    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div className={style.overlay} onClick={handleCloseModal}>
            <Modal
                title="like my portfolio? sign up for a shoot!"
                firstInputText="your name"
                secondInputText="+1"
                buttonText="book now"
                onClose={handleCloseModal}
            />
        </div>,
        body
    );
};
