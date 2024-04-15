import { useContext, useRef } from "react";
import { LanguageContext } from "../../contextLang";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { workData } from "../../Datas/projects"
import WorkCard from "../../Components/Card";
import Slider from "react-slick";

export const Portfolio = () => {
    const { language } = useContext(LanguageContext);
    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
        ;

    return (
        <div className="shadow-sm p-4 mb-5 bg-body rounded" id="portfolio">
            <h1 className="p-4">Projets</h1>
            <div className="">
                <div className="d-flex justify-content-between p-4">
                    <button className="btn btn-secondary" onClick={previous}>
                        Previous
                    </button>
                    <button className="btn btn-secondary" onClick={next}>
                        Next
                    </button>
                </div>
                <div className="slider-container">
                    <Slider ref={sliderRef} {...settings}>
                        {workData[language].map((item, index) => (
                            <div key={item.id}>
                                <WorkCard title={item.title} image={item.img} description={item.description} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};
