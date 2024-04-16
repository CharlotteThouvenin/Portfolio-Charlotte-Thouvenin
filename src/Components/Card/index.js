import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function WorkCard({ title, image, description, onClick }) {


    return (
        <div>


            <Card className='card border m-2'>
                <Card.Title className='p-2 card-title'>{title}</Card.Title>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={onClick} variant="secondary">En savoir plus</Button>
                </Card.Body>
            </Card>
        </div>

    );
}

export default WorkCard