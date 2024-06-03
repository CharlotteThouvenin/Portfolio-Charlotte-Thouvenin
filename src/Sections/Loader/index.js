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
            .fromTo(".welcome-title", { opacity: 0, x: -500 }, { opacity: 1, x: 0, fontSize: "50px", duration: 0.5 }, "start")
            .fromTo(".welcome-subtitle", { opacity: 0, x: 500 }, { opacity: 1, x: 0, duration: 0.5 }, "start")
            .fromTo(".welcome-text", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "start")
            .fromTo(".button", { y: -500, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "start")
    }, []);

    return (
        <div className="banner vh-100 d-flex flex-column justify-content-around align-items-center" id="home">

            <div className="d-flex flex-column justify-content-between align-items-center flex-wrap mt-5">

                <h1 className="welcome-title p-2 rounded text-center">Charlotte Thouvenin</h1>
                <h2 className="welcome-subtitle p-2 rounded m-4">
                    {traduction[language].bannerSubtitle}
                </h2>

            </div>
            <div className="d-flex flex-row justify-content-center pt-5 flex-wrap">


                <Button className="m-4 fs-6" variant="light" href="https://www.linkedin.com/in/charlotte-thouvenin-98399127/" target="blank" >
                    <i className="fa-brands fa-linkedin"></i>
                    <span className="ps-2">LinkedIn</span>
                </Button>



                <Button className="m-4 fs-6" variant="light" href="https://github.com/CharlotteThouvenin" target="blank" >
                    <i className="fa-brands fa-square-github"></i>
                    <span className="ps-2">GitHub</span>
                </Button>

                <Button className="m-4 fs-6" variant="light" href={traduction[language].File} download={traduction[language].File}>
                    <i className="fa-solid fa-circle-down"></i>
                    <span className="ps-2">{traduction[language].Download}</span>
                </Button>

            </div>
        </div>
    );
}
