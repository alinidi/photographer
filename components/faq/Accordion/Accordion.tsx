import plus from "../../../public/images/plus.svg";
import minus from "../../../public/images/minus.svg";
import Image from "next/image";
import style from "./Accordion.module.scss";

type AccordionType = {
    id: number;
    question: string;
    answer: string;
    openId: boolean;
    onToggle: (id: number) => void;
};

export const Accordion = ({ id, question, answer, openId, onToggle }: AccordionType) => {
    return (
        <div className={`${style.accordionItem} ${openId ? style.open : ""}`}>
            <button onClick={() => onToggle(id)} className={style.button}>
                <span className={style.question}>{question}</span>
                <span>
                    {openId ? <Image src={minus} alt="minus" /> : <Image src={plus} alt="plus" />}
                </span>
            </button>
            <div className={style.accordionContent}>
                <div className={style.answer}>{answer}</div>
            </div>
        </div>
    );
};
