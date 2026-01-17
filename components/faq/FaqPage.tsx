"use client";

import { useState } from "react";
import { Accordion } from "./Accordion/Accordion";
import style from "./FaqPage.module.scss";

type QuestionsType = {
    id: number;
    question: string;
    answer: string;
};

export const FaqPage = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setOpenId(prevId => (prevId === id ? null : id));
    };

    const questions: QuestionsType[] = [
        {
            id: 1,
            question: "How do I book a shoot?",
            answer: "Super simple — just message me through any convenient platform (Instagram, WhatsApp, email, or the contact form on this site). We’ll discuss your preferred date, city, and session type. Once confirmed, I’ll reserve the date for you and send over preparation tips.",
        },
        {
            id: 2,
            question: "Can I choose the location myself?",
            answer: "Absolutely! If there’s a special place you love or have in mind — I’m happy to shoot there. If you’re unsure, I can suggest beautiful spots with great lighting and atmosphere, tailored to your vision and mood.",
        },
        {
            id: 3,
            question: "How long does the shoot take?",
            answer: "That depends on the package you choose. On average, sessions last from 1 to 4 hours. We’ll plan the pace and type of shoot together — from relaxed city strolls and love stories to more dynamic or editorial sessions.",
        },
        {
            id: 4,
            question: "When will I receive the photos?",
            answer: "You’ll receive your edited photos within 7–14 days. For event and wedding sessions — up to 30 days. I deliver them in a stylish online gallery, where you can download them in full quality or easily share with friends and family.",
        },
        {
            id: 5,
            question: "Will you help me pose?",
            answer: "Definitely! I’ll guide you gently throughout the session — where to look, how to move, how to relax. The goal is to make you feel comfortable and natural. My approach is relaxed, and I’ll never force awkward poses. The result? Real, expressive, and beautiful photos.",
        },
        {
            id: 6,
            question: "What should I wear?",
            answer: "After booking, I’ll send you a style guide with suggestions for colors, textures, and combinations. The most important thing is that you feel confident in your outfit. I’m also happy to help you coordinate looks or plan something cohesive for couples or groups.",
        },
        {
            id: 7,
            question: "Do you retouch the photos?",
            answer: "Yes, all photos are color-corrected and lightly retouched. My editing style is clean and natural — no overdone filters or fake skin. Just you, at your best. Extra retouching is available upon request.",
        },
        {
            id: 8,
            question: "Can I get the raw files?",
            answer: " I don’t deliver RAW files. My work includes not only shooting, but also careful selection and editing to create a complete and polished result. You’ll receive only the best images, ready for printing, sharing, or publishing.",
        },
    ];

    return (
        <div className={style.pageWrapper}>
            <div className={style.faqContainer}>
                <div className={style.faqTitle}>
                    <h1 className={style.title}>Frequently Asked Questions</h1>
                    <p className={style.subtitle}>Everything You Wanted to Ask (and a Bit More)</p>
                </div>
                <div className={style.accWrapper}>
                    {questions.map(q => (
                        <Accordion
                            key={q.id}
                            id={q.id}
                            question={q.question}
                            answer={q.answer}
                            openId={openId === q.id}
                            onToggle={() => handleToggle(q.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
