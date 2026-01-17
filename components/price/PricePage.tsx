import { PriceOption } from "./PriceOption/PriceOption";
import style from "./PricePage.module.scss";

export type Option = {
    id: number;
    title: string;
    options: string[];
    price: number;
    subtitle: string;
};

export const PricePage = () => {
    const options: Option[] = [
        {
            id: 1,
            title: "mini",
            options: [
                "Up to 1 hour of shooting",
                "1 outfit / 1 location",
                "20 edited photos",
                "Online gallery",
                "Delivery within 7 days",
            ],
            price: 150,
            subtitle: "For short sessions and quick results",
        },
        {
            id: 2,
            title: "classic",
            options: [
                "Up to 2 hours of shooting",
                "2 outfit / 2 location",
                "40+ edited photos",
                "Online gallery",
                "Pre-shoot consultation",
                "Posing guidance",
                "Delivery within 10 days",
            ],
            price: 280,
            subtitle: "Perfect for couples, portraits, or lifestyle",
        },
        {
            id: 3,
            title: "story",
            options: [
                "Up to 4 hour of shooting",
                "3–4 outfits and locations",
                "80+ edited photos",
                "Online gallery + backup link",
                "Custom route planning",
                "Moodboard and styling help",
                "Includes breaks and travel time",
                "Delivery within 14 days",
            ],
            price: 450,
            subtitle: "For when you want to capture everything",
        },
        {
            id: 4,
            title: "wedding",
            options: [
                "Up to 8 hour of shooting",
                "All key moments covered",
                "250+ artistically edited photos",
                "Custom timeline planning",
                "Online gallery + USB drives",
                "Delivery within 21 days",
                "Extras: photo album, prints",
                "Optional second-day shoot",
            ],
            price: 900,
            subtitle: "Full-day or partial wedding coverage",
        },
    ];

    return (
        <div className={style.pageWrapper}>
            <div className={style.pricePage}>
                <div className={style.priceTitle}>
                    <h1 className={style.title}>packages & prices</h1>
                    <p className={style.subtitle}>
                        Choose the package that suits your story. All options are customizable to
                        your needs.
                    </p>
                </div>
                <div className={style.pricesContainer}>
                    {options.map(option => (
                        <PriceOption key={option.id} {...option} />
                    ))}
                </div>
            </div>
        </div>
    );
};
