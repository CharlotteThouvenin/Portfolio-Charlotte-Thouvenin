import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.scss'

function WorkCard({ title, image, description }) {
    return (
        <Card className='card border m-2'>
            <Card.Title className='p-2 card-title'>{title}</Card.Title>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="secondary">En savoir plus</Button>
            </Card.Body>
        </Card>
    );
}

export default WorkCard