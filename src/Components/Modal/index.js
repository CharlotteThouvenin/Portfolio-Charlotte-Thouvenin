import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';

const WorkModal = ({ itemId, onClose, workData }) => {
    const item = workData.find(item => item.id === itemId);


    const settings = {
        dots: false,           // Shows dot indicators at the bottom of the carousel
        infinite: true,       // Infinite looping
        speed: 500,           // Animation speed
        slidesToShow: 1,      // Number of slides to show at once
        slidesToScroll: 1,    // Number of slides to scroll on one change
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
    };

    return (
        <Modal show={!!item} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <div className='w-100 d-flex flex-row justify-content-between align-items-center'>
                        {item ? item.title : 'Loading...'}
                        {item && item.skills && item.skills.length > 0 && (
                            item.skills.map((skill, index) => (
                                <div className="skill-item" key={index}>
                                    <Button variant="secondary m-2" className='p-1 ms-5'>
                                        <i className={skill.icon || 'fa fa-question-circle'}></i>  {skill.name}
                                    </Button>
                                </div>
                            ))
                        )}
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {item && (
                    <Slider {...settings}>
                        {item.images && item.images.length > 0 ? (
                            item.images.map((img, index) => (
                                <div key={index}>
                                    <img src={img} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
                                </div>
                            ))
                        ) : (
                            <div>
                                <img src={item.img} alt={item.title} style={{ width: '100%' }} />
                            </div>
                        )}
                    </Slider>
                )}
                <p>{item ? item.description : ''}</p>
                <div className='d-flex'>
                    {item.url &&
                        <Button variant="secondary m-2" href={item.url} target="blank"><i className="fa-solid fa-globe" ></i>  Visitez le site</Button>}

                    <Button variant="secondary m-2" href={item.gitHub} target="blank"><i className="fa-brands fa-github"></i>  Repo Github</Button>

                </div>
            </Modal.Body>
        </Modal>
    );
};

export default WorkModal;
