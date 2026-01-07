import { LeftSection } from "./LeftSection/LeftSection";
import style from "./Home.module.scss";
import { Results } from "./Results/Results";
import photo1 from "../../public/images/home1.svg";
import photo2 from "../../public/images/home2.svg";
import Image from "next/image";

export const HomeComponent = () => {
    return (
        <div className={style.home}>
            <LeftSection />
            <div className={style.homeTitleWrapper}>
                <Results />
                <h1 className={style.homeTitle}>professional photographer</h1>
                <h2 className={style.homeSubtitle}>capture the moment. tell your story.</h2>
            </div>
            <div className={style.firstImg}>
                <Image src={photo1} alt="small-photo" />
            </div>
            <div className={style.secondImg}>
                <Image src={photo2} alt="big-photo" />
            </div>
        </div>
    );
};
