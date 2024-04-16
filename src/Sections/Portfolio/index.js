import { useContext, useRef, useState } from "react";
import { LanguageContext } from "../../contextLang";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { workData } from "./projects"
import WorkCard from "../../Components/Card";
import Slider from "react-slick";
import traduction from "./traduction"
import { useParallax } from "react-scroll-parallax";
import WorkModal from "../../Components/Modal";

export const Portfolio = () => {

    const parallax = useParallax({
        translateX: ['-100px', '0px'],
        opacity: [0, 1],
        easing: [0, 1.37, 1, .93]
    });

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
        arrows: false,
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

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleCardClick = (itemId) => {
        setSelectedItemId(itemId);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedItemId(null);
    };

    return (
        <div ref={parallax.ref} className="shadow-sm px-3 py-2 mb-5 bg-body rounded" id="portfolio">
            <h2>{traduction[language].title}</h2>
            <div>
                <div className="d-flex justify-content-between p-4">
                    <button className="btn btn-secondary" onClick={previous}>
                        {traduction[language].previous}
                    </button>
                    <button className="btn btn-secondary" onClick={next}>
                        {traduction[language].next}
                    </button>
                </div>
                <div className="slider-container w-100">
                    <Slider ref={sliderRef} {...settings}>
                        {workData[language].map((item) => (
                            <div key={item.id} onClick={() => handleCardClick(item.id)}>
                                <WorkCard title={item.title} image={item.img} description={item.description} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            {modalVisible && <WorkModal itemId={selectedItemId} onClose={closeModal} workData={workData[language]} />}
        </div>
    );
};
