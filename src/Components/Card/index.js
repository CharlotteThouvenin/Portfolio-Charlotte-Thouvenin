import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.scss'


function WorkCard({ title, image, onClick, details }) {


    return (
        <div>


            <Card className='card border m-2'>
                <Card.Title className='p-2 card-title'>{title}</Card.Title>
                <Card.Img variant="top" src={image} className='object-fit-cover' loading='lazy' />
                <Card.Body>
                    <Button onClick={onClick} variant="secondary">{details}</Button>
                </Card.Body>
            </Card>
        </div>

    );
}

export default WorkCard