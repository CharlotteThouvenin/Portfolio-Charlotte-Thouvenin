import { gsap } from "gsap";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../contextLang";
import traduction from "./traduction";
import Button from 'react-bootstrap/Button';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

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

                <h1 className="welcome-title p-2 rounded text-center">{traduction[language].bannerTitle2}</h1>
                <h2 className="welcome-subtitle p-2 rounded m-4">
                    {traduction[language].bannerSubtitle}
                </h2>

            </div>
            <div className="d-flex flex-row justify-content-center pt-5">
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-right">
                            {traduction[language].tooltipLinkedIn}
                        </Tooltip>
                    }
                >
                    <Button className="m-4 fs-5" variant="dark" href="https://www.linkedin.com/in/charlotte-thouvenin-98399127/" target="blank" >
                        <i className="fa-brands fa-linkedin"></i>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-right">
                            {traduction[language].tooltipGit}
                        </Tooltip>
                    }
                >
                    <Button className="m-4 fs-5" variant="dark" href="https://github.com/CharlotteThouvenin" target="blank" >
                        <i className="fa-brands fa-square-github"></i>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id="tooltip-right">
                            {traduction[language].tooltipDownload}
                        </Tooltip>
                    }
                >
                    <Button className="m-4 fs-5" variant="dark" href="./Charlotte_Thouvenin_CV.pdf" download="Charlotte_Thouvenin_CV.pdf">
                        <i className="fa-solid fa-circle-down"></i>
                    </Button>
                </OverlayTrigger>
            </div>
        </div>
    );
}
