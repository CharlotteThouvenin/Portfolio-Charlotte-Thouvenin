import traduction from "./traduction"
import { useContext } from "react"
import { LanguageContext } from "../../contextLang"
import { useParallax } from "react-scroll-parallax";
import Background from "../../Components/Collapse";

export const About = () => {
    const { language } = useContext(LanguageContext)
    const parallax = useParallax({
        translateX: ['-100px', '0px'],
        opacity: [0, 1],
        easing: [0, 1.37, 1, .93]
    });
    return (
        <div ref={parallax.ref} className="shadow-sm px-3 py-2 mb-5 bg-body rounded" id="about">
            <div className="row">
                <h2>{traduction[language].aboutMeTitle}</h2>
                <div className="col-md-6 p-4 col-12">

                    <p>{traduction[language].aboutMeDescription}</p>
                    <p>{traduction[language].aboutMeText}</p>
                </div>
                <div className="col-md-6 col-12 d-flex flex-row justify-content-center">
                    <Background />
                </div>
            </div>

        </div>
    )
}