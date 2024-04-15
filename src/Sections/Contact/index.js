import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // sendig data here
        alert('Form submitted');
        console.log(formData);
    };

    return (
        <div className="shadow-sm p-3 mb-5 bg-body rounded">
            <h1 className='p-2'>Contact me</h1>
            <Container style={{ maxWidth: '600px' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="message"
                            placeholder="Type your message here"
                            value={formData.message}
                            onChange={handleChange}
                            required />
                    </Form.Group>

                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>

    );
}

export default ContactForm;
