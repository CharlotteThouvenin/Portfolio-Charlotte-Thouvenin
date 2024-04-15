import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import traduction from "./traduction"
import { useContext } from "react"
import { LanguageContext } from "../../contextLang"

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

    const { language } = useContext(LanguageContext)

    return (
        <div className="shadow-sm px-3 py-2 mb-5 bg-body rounded">
            <h2>{traduction[language].title}</h2>
            <Container style={{ maxWidth: '600px' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>{traduction[language].name}</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder={traduction[language].nameInput}
                            value={formData.name}
                            onChange={handleChange}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{traduction[language].mail}</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder={traduction[language].mailInput}
                            value={formData.email}
                            onChange={handleChange}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label>{traduction[language].message}</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="message"
                            placeholder={traduction[language].messageInput}
                            value={formData.message}
                            onChange={handleChange}
                            required />
                    </Form.Group>

                    <Button variant="secondary" type="submit">
                        {traduction[language].button}
                    </Button>
                </Form>
            </Container>
        </div>

    );
}

export default ContactForm;
