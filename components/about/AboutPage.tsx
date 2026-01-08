import style from "./AboutPage.tsx.module.scss";
import aboutImg from "../../public/images/about.svg";
import aboutImg1 from "../../public/images/about1.svg";
import aboutImg2 from "../../public/images/about2.svg";
import Image from "next/image";

export const AboutPage = () => {
    return (
        <div className={style.aboutWrapper}>
            <div className={style.about}>
                <div className={style.aboutContent}>
                    <Image src={aboutImg} alt="about" className={style.contentImg} />
                    <div>
                        <h1 className={style.aboutTitle}>about me</h1>
                        <p className={style.aboutArticle}>
                            Hi! I’m Vera, a photographer with 5 years of experience. For me,
                            photography is more than just an image. It’s a way to feel the moment,
                            capture the atmosphere, and freeze time. I work with people, stories,
                            and emotions.
                        </p>
                    </div>
                </div>
                <div className={style.aboutContent}>
                    <p className={style.aboutArticle}>
                        I shoot all across Europe. I love natural light, genuine emotions, and
                        beautiful details. Each shot is a small piece of art. My goal is to create
                        timeless images that tell your unique story.
                    </p>
                    <Image src={aboutImg1} alt="about" className={style.contentImg} />
                </div>
                <div className={style.aboutContent}>
                    <Image src={aboutImg2} alt="about" className={style.contentImg} />
                    <p className={style.aboutArticle}>Seeing with heart. Shooting with soul.</p>
                </div>
            </div>
        </div>
    );
};
