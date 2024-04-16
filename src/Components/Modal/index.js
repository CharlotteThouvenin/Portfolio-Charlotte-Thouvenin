import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


const WorkModal = ({ itemId, onClose, workData }) => {
    const item = workData.find(item => item.id === itemId);
    console.log(item.skills); // This will log to console whenever the modal is rendered with an item

    return (
        <Modal show={!!item} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{item ? item.title : 'Loading...'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {item && (
                    <Carousel interval={3000} fade>
                        {item.images && item.images.length > 0 ? (
                            item.images.map((img, index) => (
                                <Carousel.Item key={index}>
                                    <img className="d-block w-100" src={img} alt={`Slide ${index + 1}`} />
                                </Carousel.Item>
                            ))
                        ) : (
                            <Carousel.Item>
                                <img className="d-block w-100" src={item.img} alt={item.title} />
                            </Carousel.Item>
                        )}
                    </Carousel>
                )}
                <p>{item ? item.description : ''}</p>

                {item && item.skills && item.skills.length > 0 && (
                    item.skills.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            <Button variant="secondary m-2">
                                <i className={skill.icon || 'fa fa-question-circle'}></i> {skill.name}
                            </Button>
                        </div>
                    ))
                )}

            </Modal.Body>
        </Modal>
    );
};

export default WorkModal;
