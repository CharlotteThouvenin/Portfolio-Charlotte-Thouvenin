
import traduction from "./traduction"
import { useContext } from "react"
import { LanguageContext } from "../../contextLang"
import { Button } from "react-bootstrap";
import { useParallax } from "react-scroll-parallax";

function ContactForm() {
    const parallax = useParallax({
        translateX: ['-100px', '0px'],
        opacity: [0, 1],
        easing: [0, 1.37, 1, .93]
    });



    const { language } = useContext(LanguageContext)

    return (
        <dix>
            <div ref={parallax.ref} className="shadow-sm px-3 py-4 mb-5 bg-body rounded" id='contact'>
                <h2>{traduction[language].title}</h2>
                <Button className="m-4 fs-5" variant="dark" href="https://www.linkedin.com/in/charlotte-thouvenin-98399127/" target="blank" >
                    <i className="fa-brands fa-linkedin"></i>
                    <span>  LinkedIn</span>
                </Button>
                <Button className="m-4 fs-5" variant="dark" href="mailto:cha.thouvenin@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                    <span>  cha.thouvenin@gmail.com</span>
                </Button>
                <Button className="m-4 fs-5" variant="dark" href="https://www.linkedin.com/in/charlotte-thouvenin-98399127/" target="blank" >
                    <i className="fa-solid fa-phone"></i>
                    <span>  06 14 84 29 18</span>
                </Button>

            </div>

        </dix>



    );
}

export default ContactForm;
