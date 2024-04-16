import { gsap } from "gsap";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../contextLang";
import traduction from "./traduction";
import Button from 'react-bootstrap/Button';


import "./style.scss"

export default function Welcome() {
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        const tl = gsap.timeline();
        tl
            .fromTo(".welcome-title", { opacity: 0, x: -1000 }, { opacity: 1, x: 0, fontSize: "50px", duration: 0.5 }, "start")
            .fromTo(".welcome-subtitle", { opacity: 0, x: 1000 }, { opacity: 1, x: 0, duration: 0.5 }, "start+=0.5")
            .fromTo(".welcome-text", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "start+=1")
            .fromTo(".button", { y: -1000 }, { y: 0, duration: 0.5 }, "start+=1.5")
    }, []);

    return (
        <div className="banner vh-100 d-flex flex-column justify-content-around align-items-center" id="home">

            <div className="d-flex flex-column justify-content-between align-items-center flex-wrap mt-5">

                <div className="text-center flex-column">
                    <h1 className="welcome-title bg-dark p-2 rounded">{traduction[language].bannerTitle2}</h1>
                    <h2 className="welcome-subtitle bg-dark p-2 rounded m-4">
                        {traduction[language].bannerSubtitle}
                    </h2>
                </div>
                <div className="mt-5">
                    <div className="welcome-text w-50 mx-auto text-center bg-dark p-2 rounded">{traduction[language].bannerText}</div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center pb-5">
                <Button variant="secondary" size="lg" className="d-flex flex-column align-items-center button learnMore" href="#portfolio">
                    <span>{traduction[language].bannerButton}</span>
                    <i className="fa-solid fa-circle-arrow-down"></i>
                </Button>
            </div>
        </div>
    );
}
